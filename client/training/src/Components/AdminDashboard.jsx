import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-light">
      {/* Sidebar */}
      <aside className="w-64 bg-darker text-whiter p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a
              href="/admin-dashboard"
              className="text-mid hover:text-light font-semibold block"
            >
              Dashboard Overview
            </a>
          </li>
          <li className="mb-4">
            <Link
              to="/AddTrainer"
              className="text-mid hover:text-light font-semibold block"
            >
              Add trainers
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/AddEmployee"
              className="text-mid hover:text-light font-semibold block"
            >
              Add employees
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/AddCourses"
              className="text-mid hover:text-light font-semibold block"
            >
              Courses
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-whiter">
        <h1 className="text-3xl font-bold text-dark mb-4">Welcome Admin</h1>
        <p className="text-lg text-mid">
          Here you can manage users, view reports, and adjust settings.
        </p>
      </main>
    </div>
  );
};

export default AdminDashboard;
