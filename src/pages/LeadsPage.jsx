import { useEffect, useState } from "react";

function LeadsPage() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Leads Dashboard</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>WhatsApp</th>
            <th>Treatment</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.fullName}</td>
              <td>{lead.email}</td>
              <td>{lead.country}</td>
              <td>
                {lead.whatsapp ? (
                  <a
                    href={`https://wa.me/${lead.whatsapp}?text=${encodeURIComponent(
                      "Hi, I’m interested in dental treatment in India. Can you guide me?",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat
                  </a>
                ) : (
                  "-"
                )}
              </td>

              <td>{lead.treatment}</td>
              <td>{new Date(lead.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsPage;
