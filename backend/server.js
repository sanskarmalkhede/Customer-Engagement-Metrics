const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Function to load user data
const getUsers = () => JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

// 📌 Get All Users (No Pagination, No Infinite Scrolling)
app.get("/api/users", (req, res) => {
  let users = getUsers();
  const { search, retentionCategory, engagementScore } = req.query;

  console.log(`Fetching users - Search: ${search}, Retention: ${retentionCategory}, Score: ${engagementScore}`);

  // Apply search filter
  if (search) {
    users = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply retention category filter
  if (retentionCategory) {
    users = users.filter(
      (user) => user.retentionCategory.toLowerCase() === retentionCategory.toLowerCase()
    );
  }

  // Apply engagement score filter
  if (engagementScore) {
    users = users.filter((user) => user.engagementScore >= parseInt(engagementScore, 10));
  }

  res.json(users);
});

// 📌 Get Engagement Metrics
const getEngagement = () => JSON.parse(fs.readFileSync("./data/engagement.json", "utf-8"));

app.get("/api/engagement", (req, res) => {
  res.json(getEngagement());
});

// 📌 Get AI Insights
app.get("/api/insights", (req, res) => {
  const engagement = getEngagement();
  res.json(engagement.aiInsights);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
