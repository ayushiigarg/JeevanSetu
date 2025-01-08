import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import {
  Users,
  Droplets,
  TrendingUp,
  Activity,
  UserCircle,
} from "lucide-react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Reusable StatsCard component
const StatsCard = ({
  title,
  description,
  value,
  percentage,
  icon,
  bgColor,
  iconColor,
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className={`p-3 ${bgColor} rounded-full`}>{icon}</div>
    </div>
    <div className="flex items-end justify-between">
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      <div className={`flex items-center ${iconColor}`}>
        <TrendingUp className="w-4 h-4 mr-1" />
        <span className="text-sm font-medium">{percentage}</span>
      </div>
    </div>
  </div>
);

// Reusable RecentDonorItem component
const RecentDonorItem = ({ donor }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div className="flex items-center">
      <UserCircle className="w-10 h-10 text-gray-400 mr-3" />
      <div>
        <p className="font-medium text-gray-800">{donor.name}</p>
        <p className="text-sm text-gray-500">{donor.date}</p>
      </div>
    </div>
    <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
      {donor.bloodGroup}
    </span>
  </div>
);

const Admin = () => {
  const bloodGroupData = [
    { label: "A+", value: 40 },
    { label: "B+", value: 25 },
    { label: "O+", value: 15 },
    { label: "AB+", value: 20 },
  ];

  const recentDonors = [
    { name: "James Lisley", date: "2024-03-15", bloodGroup: "A+" },
    { name: "Joel Lispler", date: "2024-03-14", bloodGroup: "B+" },
    { name: "Sarah Connor", date: "2024-03-13", bloodGroup: "O+" },
  ];

  // Pie chart colors
  const COLORS = ["#4F46E5", "#EF4444", "#10B981", "#F59E0B"];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Navbar /> {/* Include Navbar component */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Blood Bank Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Overview of donations and statistics
        </p>
      </header>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content (Stats and Activity) */}
        <div className="flex flex-col gap-8 col-span-2">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <StatsCard
              title="Active Prospects"
              description="Potential donors this month"
              value="75%"
              percentage="+12.5%"
              icon={<Users className="w-6 h-6 text-blue-600" />}
              bgColor="bg-blue-50"
              iconColor="text-green-600"
            />
            <StatsCard
              title="Total Donors"
              description="Registered blood donors"
              value="100"
              percentage="+5.2%"
              icon={<Droplets className="w-6 h-6 text-red-600" />}
              bgColor="bg-red-50"
              iconColor="text-green-600"
            />
          </div>

          {/* Activity Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex-grow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Donation Activity
                </h3>
                <p className="text-gray-500 text-sm">Monthly donation trends</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <Activity className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="h-[calc(100%-5rem)]">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                height={300}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                grid={{ vertical: true, horizontal: true }}
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar (Charts and Recent Donors) */}
        <div className="flex flex-col gap-8">
          {/* Blood Group Distribution */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex-grow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Blood Group Distribution
            </h3>
            <div className="h-72 flex justify-center items-center">
              <PieChart width={300} height={300}>
                <Pie
                  data={bloodGroupData}
                  dataKey="value"
                  nameKey="label"
                  outerRadius={120}
                  fill="#8884d8"
                  label
                >
                  {bloodGroupData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>

          {/* Recent Donors */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Donors
            </h3>
            <div className="space-y-4">
              {recentDonors.map((donor, index) => (
                <RecentDonorItem key={index} donor={donor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
