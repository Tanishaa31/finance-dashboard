import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

const Charts = () => {
  const lineData = [
    { name: "Apr 1", value: 5000 },
    { name: "Apr 2", value: 4800 },
    { name: "Apr 3", value: 3800 },
  ];

  const pieData = [
    { name: "Food", value: 200 },
    { name: "Shopping", value: 1000 },
  ];

  const COLORS = ["#ef4444", "#3b82f6"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-6xl mx-auto">

      {/* Line Chart */}
      <div className="bg-white p-4 rounded shadow h-64">
        <h2 className="font-bold mb-2">Balance Trend</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded shadow h-64">
        <h2 className="font-bold mb-2">Spending Breakdown</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80}>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;