import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import StudentsTable from "../components/StudentsTable";
import StudentModal from "../components/StudentModal";

export default function StudentsPage({ students, setStudents, onNavigate, onLogout }) {

  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);

  const API = "http://127.0.0.1:8000/api";

  // ADD / UPDATE
  const handleSave = async (form) => {

    try {

      if (modal.editing) {

        // UPDATE
        const res = await fetch(`${API}/students/${modal.editing.id}/`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });

        const data = await res.json();

        if (data.success) {
          setStudents(prev =>
            prev.map(s => s.id === modal.editing.id ? { ...modal.editing, ...form } : s)
          );
        }

      } else {

        // ADD
        const res = await fetch(`${API}/students/add/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });

        const data = await res.json();

        if (data.success) {
          setStudents(prev => [...prev, { ...form, id: data.student_id }]);
        }

      }

      setModal(null);

    } catch (error) {
      console.error("API error:", error);
    }
  };


  // DELETE
  const handleDelete = async (id) => {

    if (!window.confirm("Delete this student?")) return;

    try {

      const res = await fetch(`${API}/students/${id}/`, {
        method: "DELETE"
      });

      const data = await res.json();

      if (data.success) {
        setStudents(prev => prev.filter(s => s.id !== id));
      }

    } catch (error) {
      console.error("Delete error:", error);
    }
  };


  return (
    <div className="dash-wrap">

      <Sidebar page="students" onNavigate={onNavigate} onLogout={onLogout} />

      <div className="main">

        <div className="topbar">
          <div className="topbar-title">Students</div>

          <div className="topbar-right">

            <input
              className="search-input"
              placeholder="Search students…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <button
              className="add-btn"
              onClick={() => setModal({ editing: null })}
            >
              + Add Student
            </button>

          </div>
        </div>

        <StudentsTable
          students={students}
          onEdit={s => setModal({ editing: s })}
          onDelete={handleDelete}
          search={search}
        />

      </div>

      {modal &&
        <StudentModal
          student={modal.editing}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      }

    </div>
  );
}