import React, { useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm"; // Adjust the path as necessary

const AddEmployee = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddEmployee = () => {
    setShowForm(true);
  };

  const handleSubmit = (employeeData) => {
    // Logic to handle the submission of employee data goes here
    console.log("Employee Data:", employeeData);

    // Hide the form after submission
    setShowForm(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light">
      <h1 className="text-3xl font-bold text-dark mb-6">Add Employee</h1>
      <button
        onClick={handleAddEmployee}
        className="bg-dark hover:bg-darker text-whiter font-bold py-2 px-4 rounded transition duration-200 mb-4"
      >
        Add Employee
      </button>

      {showForm && <AddEmployeeForm onSubmit={handleSubmit} />}
    </div>
  );
};

export default AddEmployee;
