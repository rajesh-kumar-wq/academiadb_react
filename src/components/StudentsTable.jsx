import React from "react";

export default function StudentsTable({ students, onEdit, onDelete, search }) {
  const filtered = students.filter(s =>
    [s.name, s.course, s.email, s.status].some(v =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  if (filtered.length === 0)
    return <div className="table-card"><div className="empty-state">No students found.</div></div>;

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            {["#", "Name", "Course", "Duration", "Phone", "Email", "Status", "Actions"].map(h => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 500 }}>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.duration}</td>
              <td>{s.phone}</td>
              <td style={{ color: "#6B6B67" }}>{s.email}</td>
              <td><span className={`status-badge status-${s.status}`}>{s.status}</span></td>
              <td>
                <button className="btn-edit"   onClick={() => onEdit(s)}>Edit</button>
                <button className="btn-delete" onClick={() => onDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
