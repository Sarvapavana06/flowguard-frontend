import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const riskData = [
  { name: "Low", value: 55 },
  { name: "Medium", value: 30 },
  { name: "High", value: 15 },
];

const executionData = [
  { day: "Mon", executions: 15 },
  { day: "Tue", executions: 28 },
  { day: "Wed", executions: 22 },
  { day: "Thu", executions: 35 },
  { day: "Fri", executions: 30 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

function Charts() {
  return (
    <div className="charts-grid">
      <div className="chart-card">
        <h3>Risk Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={riskData}
              dataKey="value"
              outerRadius={90}
              label
            >
              {riskData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Workflow Executions</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={executionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="executions"
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;