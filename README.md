# Customer Engagement Dashboard

## 🚀 Welcome to the Customer Engagement Dashboard!

This project is a web-based analytics tool designed to help you understand and improve customer engagement. It provides a clean, responsive interface with interactive data visualizations, churn prediction insights, and dark mode support. Whether you're a developer looking to contribute or a user seeking to analyze customer data, this dashboard is designed to be intuitive and powerful.

---

## 💡 Project Overview

The **Customer Engagement Dashboard** tracks user engagement, predicts churn, and delivers AI-powered insights. It's built with a focus on usability and performance, ensuring you can quickly access and understand your data.

### **Key Features:**
- **User Engagement Tracking:** Monitor key metrics like engagement scores and retention categories.
- **Search & Filters:** Easily find specific users using various filters.
- **Interactive Data Visualizations:** Analyze trends with dynamic charts and graphs.
- **Churn Prediction:** Get insights into potential customer churn based on engagement and activity.
- **Dark Mode Support:** Enjoy a comfortable viewing experience with seamless dark mode integration.
- **Optimized Performance:** Benefit from fast data retrieval through efficient caching.

---

## 🛠️ Tech Stack

This project leverages a modern tech stack for both the frontend and backend:

### **Frontend:**
- **React (Vite):** For building a fast and efficient user interface.
- **TypeScript:** For enhanced code maintainability and type safety.
- **Tailwind CSS:** For rapid UI development with a utility-first CSS framework.
- **Recharts:** For creating interactive and responsive charts.

### **Backend:**
- **Node.js:** For a scalable and efficient server-side environment.
- **Express.js:** For building robust and flexible APIs.

### **Database:**
- **JSON file (Initial):** For simplicity during development.
- **MongoDB (Recommended for Production):** To handle larger datasets and improve scalability.

---

## ✨ Getting Started: Setup & Run Locally

Follow these steps to get the Customer Engagement Dashboard running on your local machine:

### **1. Clone the Repository**
First, clone the repository to your local machine using Git:

```bash
git clone https://github.com/sanskarmalkhede/Customer-Engagement-Metrics.git
cd customer-engagement-dashboard
```

### **2. Install Dependencies**
Navigate to the backend and frontend directories and install the necessary dependencies using npm:

#### **Backend**
```bash
cd backend
npm install
```

#### **Frontend**
```bash
cd frontend
npm install
```

### **3. Run the Project**
Start the backend server and the frontend development server:

#### **Start the Backend Server**
```bash
cd backend
node server.js
```

#### **Start the Frontend**
```bash
cd frontend
npm run dev
```

### **4. Open the Dashboard**
Once both servers are running, open your web browser and navigate to **[http://localhost:5173/](http://localhost:5173/)** (or the address provided by Vite) to view the dashboard.

---

## 📊 Understanding the Data: Research & Insights

### **Engagement Score Calculation**
The engagement score is a key metric that reflects user activity. It's calculated based on:

- **Login Frequency (40%)**: How often a user logs into the platform.
- **Time Spent on Platform (30%)**: The duration of user sessions.
- **Feature Usage (30%)**: The extent to which users utilize platform features.

#### **Formula:**
```plaintext
Engagement Score = (Login Frequency × 0.4) + (Time Spent × 0.3) + (Feature Usage × 0.3)
```

### **Churn Prediction Model**
Our churn prediction model identifies users at risk of leaving based on:

- **Inactivity:** Users inactive for 30+ days are considered high-risk.
- **Low Engagement Score:** Scores below 30 indicate potential churn.
- **Retention Category:** Lower retention categories signal higher churn likelihood.

#### **Basic Formula:**
```plaintext
Churn Probability = (Inactive Days × 0.5) + (Low Engagement × 0.5)
```
**Note:** This is a rule-based model. Future iterations will incorporate machine learning for improved accuracy.

---

## 📌 Challenges & Future Improvements

### **Current Challenges:**
- **Scalability:** The current JSON file storage limits the ability to handle large datasets.
- **Churn Prediction Accuracy:** The rule-based churn prediction model can be enhanced with machine learning.

### **Planned Improvements:**
✅ **Migrate to MongoDB:** Transition to MongoDB for improved scalability and performance.  
✅ **Implement ML-based Churn Prediction:** Integrate machine learning models to enhance prediction accuracy.  
✅ **Real-Time Analytics:** Add features to track live user activity.  
✅ **UI/UX Enhancements:** Improve UI animations and loading states for a smoother user experience.  

---

## 🤝 Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, concise messages.
4. Submit a pull request with a detailed description of your changes.
