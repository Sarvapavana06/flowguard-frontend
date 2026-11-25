import "../styles/table.css";

const events = [
  {
    id: "EV-001",
    workflow: "Payment Approval",
    event: "Workflow Started",
    time: "10:30 AM",
  },
  {
    id: "EV-002",
    workflow: "Employee Onboarding",
    event: "Task Completed",
    time: "11:15 AM",
  },
  {
    id: "EV-003",
    workflow: "Invoice Processing",
    event: "Approval Failed",
    time: "12:20 PM",
  },
];

function Events() {
  return (
    <div className="table-page">
      <h1>Events</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Workflow</th>
            <th>Event</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.workflow}</td>
              <td>{event.event}</td>
              <td>{event.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Events;