import React, { useState } from "react";
import AddCourseForm from "./AddCourseForm"; // Import the course form
import axios from "axios";

const AddCourse = () => {
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  // Function to handle "Add Course" button click
  const handleAddCourseClick = () => {
    setShowForm(true); // Show the form
  };

  // Function to handle form submission
  const handleFormSubmit = async (courseData) => {
    try {
      // Send a POST request with the course data
      const response = await axios.post(
        "http://localhost:4000/course/add",
        courseData
      );

      // Handle successful form submission (you can add your logic here)
      console.log("Course added successfully:", response.data);

      // Hide the form after submission
      setShowForm(false);
    } catch (error) {
      // Handle any errors during the submission
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handleAddCourseClick}
        className="mb-4 bg-dark hover:bg-darker text-whiter font-bold py-2 px-4 rounded transition duration-200"
      >
        Add Course
      </button>
      {showForm && <AddCourseForm onSubmit={handleFormSubmit} />}{" "}
      {/* Conditionally render the form */}
    </div>
  );
};

export default AddCourse;
