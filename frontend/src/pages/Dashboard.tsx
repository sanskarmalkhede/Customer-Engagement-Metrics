import { useEffect, useState } from "react";
import { fetchEngagement, fetchAIInsights } from "../utils/api";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface EngagementData {
  activeUsers: { daily: number; weekly: number; monthly: number };
  retentionRate: number;
  churnPrediction: { id: number; name: string; email: string; churnProbability: number }[];
}

interface AIInsights {
  recommendations: string[];
  featureUsage: { mostUsed: string[]; underperforming: string[] };
}

function Dashboard() {
  const [engagement, setEngagement] = useState<EngagementData | null>(null);
  const [aiInsights, setAIInsights] = useState<AIInsights | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const engagementData = await fetchEngagement();
      const aiInsightsData = await fetchAIInsights();
      setEngagement(engagementData);
      setAIInsights(aiInsightsData);
    };
    loadData();
  }, []);

  const engagementChartData = engagement
    ? [
        { period: "Daily", users: engagement.activeUsers.daily },
        { period: "Weekly", users: engagement.activeUsers.weekly },
        { period: "Monthly", users: engagement.activeUsers.monthly },
      ]
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white dark:bg-gray-800 dark:text-white shadow rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Engagement Metrics</h2>

      {engagement ? (
        <>
          <div className="mb-4">
            <p><strong>Daily Active Users:</strong> {engagement.activeUsers.daily}</p>
            <p><strong>Weekly Active Users:</strong> {engagement.activeUsers.weekly}</p>
            <p><strong>Monthly Active Users:</strong> {engagement.activeUsers.monthly}</p>
            <p><strong>Retention Rate:</strong> {engagement.retentionRate}%</p>
          </div>

          <h3 className="text-lg font-bold mt-6">📈 Active Users Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={document.documentElement.classList.contains("dark") ? "#444" : "#ccc"} />
              <XAxis dataKey="period" stroke={document.documentElement.classList.contains("dark") ? "#ddd" : "#000"} />
              <YAxis stroke={document.documentElement.classList.contains("dark") ? "#ddd" : "#000"} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>

          <h3 className="text-lg font-bold mt-6">📊 Churn Prediction</h3>
          {engagement.churnPrediction.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagement.churnPrediction}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke={document.documentElement.classList.contains("dark") ? "#ddd" : "#000"} />
                <YAxis stroke={document.documentElement.classList.contains("dark") ? "#ddd" : "#000"} />
                <Tooltip />
                <Legend />
                <Bar dataKey="churnProbability" fill="#ff6961" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No users predicted to churn.</p>
          )}
        </>
      ) : (
        <p>Loading engagement data...</p>
      )}

      {aiInsights && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 shadow rounded"
        >
          <h3 className="text-lg font-bold mb-2">🔍 AI Insights</h3>
          <h4 className="font-semibold mt-2">📢 Churn Reduction Strategies:</h4>
          <ul className="list-disc pl-5">
            {aiInsights.recommendations.map((rec, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{rec}</li>
            ))}
          </ul>

          <h4 className="font-semibold mt-4">📊 Feature Usage:</h4>
          <p><strong>Most Used:</strong> {aiInsights.featureUsage.mostUsed.join(", ")}</p>
          <p><strong>Underperforming:</strong> {aiInsights.featureUsage.underperforming.join(", ")}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Dashboard;
