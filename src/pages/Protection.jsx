import StatusBadge from "../components/StatusBadge";
import "../styles/table.css";

const protections = [
  {
    id: "PR-001",
    workflow: "Payment Approval",
    action: "Execution Blocked",
    status: "Protected",
  },
  {
    id: "PR-002",
    workflow: "Invoice Processing",
    action: "Auto Retry",
    status: "Completed",
  },
  {
    id: "PR-003",
    workflow: "Employee Onboarding",
    action: "Notification Sent",
    status: "Pending",
  },
];

function Protection() {
  return (
    <div className="table-page">
      <h1>Protection</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Workflow</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {protections.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.workflow}</td>
              <td>{item.action}</td>
              <td><StatusBadge status={item.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Protection;