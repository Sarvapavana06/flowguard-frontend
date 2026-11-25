import RiskBadge from "../components/RiskBadge";
import StatusBadge from "../components/StatusBadge";
import "../styles/table.css";

const alerts = [
  {
    id: "ALT-001",
    workflow: "Payment Approval",
    severity: "High",
    status: "Open",
  },
  {
    id: "ALT-002",
    workflow: "Employee Onboarding",
    severity: "Medium",
    status: "Investigating",
  },
  {
    id: "ALT-003",
    workflow: "Invoice Processing",
    severity: "Critical",
    status: "Open",
  },
  {
    id: "ALT-004",
    workflow: "Leave Approval",
    severity: "Low",
    status: "Resolved",
  },
];

function Alerts() {
  return (
    <div className="table-page">
      <h1>Alerts</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Workflow</th>
            <th>Severity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.workflow}</td>
              <td>
                <RiskBadge level={alert.severity} />
              </td>
              <td><StatusBadge status={alert.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alerts;