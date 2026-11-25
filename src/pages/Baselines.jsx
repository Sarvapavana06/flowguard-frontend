import RiskBadge from "../components/RiskBadge";
import "../styles/table.css";

const baselines = [
  {
    id: "BL-001",
    workflow: "Payment Approval",
    expectedTime: "5 min",
    risk: "Low",
  },
  {
    id: "BL-002",
    workflow: "Employee Onboarding",
    expectedTime: "20 min",
    risk: "Medium",
  },
  {
    id: "BL-003",
    workflow: "Invoice Processing",
    expectedTime: "8 min",
    risk: "High",
  },
];

function Baselines() {
  return (
    <div className="table-page">
      <h1>Workflow Baselines</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Workflow</th>
            <th>Expected Time</th>
            <th>Risk</th>
          </tr>
        </thead>

        <tbody>
          {baselines.map((baseline) => (
            <tr key={baseline.id}>
              <td>{baseline.id}</td>
              <td>{baseline.workflow}</td>
              <td>{baseline.expectedTime}</td>
              <td>
                <RiskBadge level={baseline.risk} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Baselines;