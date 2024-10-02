import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
import TrainerDashboard from "./Components/TrainerDashboard";
import AddTrainer from "./Components/AddTrainer";
import AddEmployee from "./Components/AddEmployee";
import AddCourse from "./Components/AddCourse";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for Login */}
          <Route path="/" element={<Login />} />

          {/* Route for Admin Dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Route for Trainer Dashboard */}
          <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
          <Route path="/AddTrainer" element={<AddTrainer />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/AddCourses" element={<AddCourse />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
