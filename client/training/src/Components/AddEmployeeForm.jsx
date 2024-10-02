import React, { useState } from "react";
import axios from "axios";

const AddEmployeeForm = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeRole, setEmployeeRole] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // For success or error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST request to the backend
      const response = await axios.post("http://localhost:4000/user/add", {
        name: employeeName,
        role: employeeRole,
        email: email,
      });

      // Show success message and reset the form
      setMessage(response.data.message || "Employee added successfully!");
      setEmployeeName("");
      setEmployeeRole("");
      setEmail("");
    } catch (error) {
      // Handle error and display error message
      console.error("There was an error adding the employee:", error);
      setMessage(error.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-whiter shadow-md rounded-lg p-6 w-96"
    >
      <div className="mb-4">
        <label
          htmlFor="employeeName"
          className="block text-mid font-medium mb-2"
        >
          Employee Name
        </label>
        <input
          type="text"
          id="employeeName"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          placeholder="Enter employee name"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="employeeRole"
          className="block text-mid font-medium mb-2"
        >
          Role
        </label>
        <input
          type="text"
          id="employeeRole"
          value={employeeRole}
          onChange={(e) => setEmployeeRole(e.target.value)}
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          placeholder="Enter employee role"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-mid font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          placeholder="Enter email"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-dark hover:bg-darker text-whiter font-bold py-2 px-4 rounded transition duration-200"
      >
        Submit
      </button>

      {message && (
        <div className="mt-4 text-center text-mid font-semibold">{message}</div>
      )}
    </form>
  );
};

export default AddEmployeeForm;
