import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import { motion } from "framer-motion";

interface User {
  id: number;
  name: string;
  email: string;
  lastLogin: string;
  engagementScore: number;
  retentionCategory: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [retentionCategory, setRetentionCategory] = useState("");
  const [engagementScore, setEngagementScore] = useState(0);

  // Fetch all users immediately
  useEffect(() => {
    const fetchData = async () => {
      let queryParams = "?";
      if (search) queryParams += `search=${search}&`;
      if (retentionCategory) queryParams += `retentionCategory=${retentionCategory}&`;
      if (engagementScore > 0) queryParams += `engagementScore=${engagementScore}`;

      const data = await fetchUsers(queryParams);
      console.log("Fetched users:", data);
      setUsers(data);
    };

    fetchData();
  }, [search, retentionCategory, engagementScore]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100 dark:bg-gray-900 dark:text-gray-200 shadow-lg rounded-md"
    >
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Users</h2>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border dark:border-gray-700 p-3 rounded w-full mb-4 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 gap-4">
          {/* Retention Category Dropdown */}
          <select
            value={retentionCategory}
            onChange={(e) => setRetentionCategory(e.target.value)}
            className="border dark:border-gray-700 p-3 rounded w-full bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Retention Categories</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {/* Engagement Score Slider */}
          <div>
            <label className="block text-sm font-semibold dark:text-gray-300">
              Engagement Score: {engagementScore}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={engagementScore}
              onChange={(e) => setEngagementScore(parseInt(e.target.value))}
              className="w-full bg-gray-300 dark:bg-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="border dark:border-gray-700 px-5 py-3 text-left">Name</th>
              <th className="border dark:border-gray-700 px-5 py-3 text-left">Email</th>
              <th className="border dark:border-gray-700 px-5 py-3 text-left">Last Login</th>
              <th className="border dark:border-gray-700 px-5 py-3 text-left">Engagement Score</th>
              <th className="border dark:border-gray-700 px-5 py-3 text-left">Retention Category</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="border dark:border-gray-700 px-5 py-3">{user.name}</td>
                  <td className="border dark:border-gray-700 px-5 py-3">{user.email}</td>
                  <td className="border dark:border-gray-700 px-5 py-3">{user.lastLogin}</td>
                  <td className="border dark:border-gray-700 px-5 py-3">{user.engagementScore}</td>
                  <td className="border dark:border-gray-700 px-5 py-3">{user.retentionCategory}</td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 dark:text-gray-300">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default Users;
