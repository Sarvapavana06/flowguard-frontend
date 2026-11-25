import StatCard from "../components/StatCard";
import Charts from "../components/Charts";
import RiskBadge from "../components/RiskBadge";
import StatusBadge from "../components/StatusBadge";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p className="dashboard-subtitle">
        Workflow Monitoring & Protection Overview
      </p>

      <div className="stats-grid">
        <StatCard
          title="Total Workflows"
          value="42"
          color="#2563eb"
        />

        <StatCard
          title="Executions"
          value="251"
          color="#10b981"
        />

        <StatCard
          title="Alerts"
          value="7"
          color="#f59e0b"
        />

        <StatCard
          title="Critical Risk"
          value="2"
          color="#ef4444"
        />
      </div>

      <Charts />

      <div className="dashboard-section">
        <h2>Recent Activity</h2>

        <table className="activity-table">
          <thead>
            <tr>
              <th>Workflow</th>
              <th>Status</th>
              <th>Risk</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Payment Approval</td>
              <td><StatusBadge status="Running" /></td>
              <td><RiskBadge level="Low" /></td>
            </tr>

            <tr>
              <td>HR Onboarding</td>
              <td><StatusBadge status="Completed" /></td>
              <td><RiskBadge level="Medium" /></td>
            </tr>

            <tr>
              <td>Invoice Processing</td>
              <td><StatusBadge status="Blocked" /></td>
              <td><RiskBadge level="High" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;