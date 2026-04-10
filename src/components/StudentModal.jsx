import React, { useState } from "react";

const BLANK = { name: "", course: "", duration: "", phone: "", email: "", status: "Active" };

export default function StudentModal({ student, onSave, onClose }) {
  const [form, setForm] = useState(student || BLANK);
  const [err,  setErr]  = useState("");

  const handleSave = () => {
    if (!form.name || !form.course || !form.duration || !form.phone || !form.email) {
      setErr("Please fill in all fields.");
      return;
    }
    onSave(form);
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-title">{student ? "Edit Student" : "Add Student"}</div>
        {err && <div className="msg-error" style={{ marginBottom: 0 }}>{err}</div>}
        {["name", "course", "duration", "phone", "email"].map(field => (
          <input
            key={field}
            className="modal-input"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={e => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <select className="modal-select" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
        <div className="modal-btns">
          <button className="modal-save"   onClick={handleSave}>{student ? "Update" : "Save"}</button>
          <button className="modal-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
