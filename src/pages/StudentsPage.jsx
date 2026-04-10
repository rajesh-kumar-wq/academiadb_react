import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import StudentsTable from "../components/StudentsTable";
import StudentModal from "../components/StudentModal";

export default function StudentsPage({ students, setStudents, onNavigate, onLogout }) {
  const [search, setSearch] = useState("");
  const [modal,  setModal]  = useState(null);
  const nextId = useRef(students.length + 100);

  const handleSave = form => {
    if (modal.editing) {
      setStudents(prev => prev.map(s => s.id === modal.editing.id ? { ...modal.editing, ...form } : s));
    } else {
      setStudents(prev => [...prev, { ...form, id: nextId.current++ }]);
    }
    setModal(null);
  };

  const handleDelete = id => {
    if (window.confirm("Delete this student?"))
      setStudents(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="dash-wrap">
      <Sidebar page="students" onNavigate={onNavigate} onLogout={onLogout} />
      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Students</div>
          <div className="topbar-right">
            <input className="search-input" placeholder="Search students…"
              value={search} onChange={e => setSearch(e.target.value)} />
            <button className="add-btn" onClick={() => setModal({ editing: null })}>+ Add Student</button>
          </div>
        </div>
        <StudentsTable students={students} onEdit={s => setModal({ editing: s })} onDelete={handleDelete} search={search} />
      </div>
      {modal && <StudentModal student={modal.editing} onSave={handleSave} onClose={() => setModal(null)} />}
    </div>
  );
}
