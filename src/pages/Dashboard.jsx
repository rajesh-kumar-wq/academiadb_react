import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import StudentsTable from "../components/StudentsTable";
import StudentModal from "../components/StudentModal";

const API = "http://127.0.0.1:8000/api";

// 🔐 reusable auth fetch
const authFetch = (url, options = {}) => {
  const token = localStorage.getItem("access");

  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
};

export default function Dashboard({ students, setStudents, onNavigate, onLogout }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch students
  useEffect(() => {
    authFetch(`${API}/students/`)
      .then((r) => r.json())
      .then((data) => {
        setStudents(data.students || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // ✅ ADD / UPDATE student
  const handleSave = async (form) => {
    try {
      if (modal.editing) {
        const res = await authFetch(
          `${API}/students/${modal.editing.id}/`,
          {
            method: "PUT",
            body: JSON.stringify(form),
          }
        );

        const data = await res.json();

        if (data.success) {
          setStudents((prev) =>
            prev.map((s) =>
              s.id === modal.editing.id ? { ...s, ...form } : s
            )
          );
        }
      } else {
        const res = await authFetch(`${API}/students/add/`, {
          method: "POST",
          body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.success) {
          setStudents((prev) => [
            ...prev,
            { ...form, id: data.student_id },
          ]);
        }
      }

      setModal(null);
    } catch (e) {
      console.error(e);
    }
  };

  // ✅ DELETE student
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      const res = await authFetch(`${API}/students/${id}/`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setStudents((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (e) {
      console.error(e);
    }
  };

  // stats
  const active = students.filter((s) => s.status === "Active").length;
  const courses = [...new Set(students.map((s) => s.course))].length;

  return (
    <div className="dash-wrap">
      <Sidebar
        page="dashboard"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="main">
        {/* TOP BAR */}
        <div className="topbar">
          <div className="topbar-title">Dashboard</div>

          <div className="topbar-right">
            <input
              className="search-input"
              placeholder="Search students…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="add-btn"
              onClick={() => setModal({ editing: null })}
            >
              + Add Student
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="cards-grid">
          <div className="stat-card">
            <div className="stat-label">Total students</div>
            <div className="stat-value">{students.length}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Courses</div>
            <div className="stat-value">{courses}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Active students</div>
            <div className="stat-value">{active}</div>
          </div>
        </div>

        {/* TABLE */}
        {loading ? (
          <p>Loading…</p>
        ) : (
          <StudentsTable
            students={students}
            onEdit={(s) => setModal({ editing: s })}
            onDelete={handleDelete}
            search={search}
          />
        )}
      </div>

      {/* MODAL */}
      {modal && (
        <StudentModal
          student={modal.editing}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}