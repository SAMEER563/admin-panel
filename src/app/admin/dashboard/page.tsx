'use client';

import { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import ProtectedRoute from '../ProtectedRoute'; // Import the ProtectedRoute component
import NotificationForm from '@/app/components/NotificationForm';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register Pie chart component
);

const Dashboard = () => {
  const [totalUsers] = useState(150); // Dummy data for total users
  const [newUsers] = useState(20); // Dummy data for new users
  const [activeUsers] = useState(120); // Dummy data for active users

  // Dummy data for Line chart (Active Users Over Time)
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Active Users',
        data: [50, 60, 70, 80, 90, 100, 110],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Dummy data for Pie chart (User Distribution)
  const pieChartData = {
    labels: ['New Users', 'Active Users', 'Inactive Users'],
    datasets: [
      {
        data: [20, 120, 10], // Example distribution data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF4384', '#36A0EB', '#FFBD56'],
      },
    ],
  };

  const hasPermission = true; // Simulate permission check (e.g., check user role)

  return (
    <ProtectedRoute hasPermission={hasPermission}>
      <div className="space-y-6 p-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

  

        {/* Greeting */}
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Welcome, Admin!</h3>
          <p className="text-sm text-gray-600">You have full access to the admin panel.</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Total Users</h4>
            <p className="text-xl">{totalUsers}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">New Users (This Month)</h4>
            <p className="text-xl">{newUsers}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Active Users</h4>
            <p className="text-xl">{activeUsers}</p>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Active Users Over Time</h4>
            <div className="h-64"> {/* Adjust the height for a smaller chart */}
              <Line data={lineChartData} />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">User Distribution</h4>
            <div className="h-64"> {/* Same height for Pie chart */}
              <Pie data={pieChartData} />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 rounded-lg mt-6">
          <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600">View All Users</a>
            </li>
            <li>
              <a href="#" className="text-blue-600">Manage Roles</a>
            </li>
            <li>
              <a href="#" className="text-blue-600">View Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
