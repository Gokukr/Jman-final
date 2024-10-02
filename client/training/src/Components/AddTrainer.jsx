import React, { useState } from "react";
import AddTrainerForm from "./AddTrainerForm"; // Import the form
import axios from "axios";

const AddTrainer = () => {
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  // Function to handle "Add Trainer" button click
  const handleAddTrainerClick = () => {
    setShowForm(true); // Show the form
  };

  // Function to handle form submission
  const handleFormSubmit = async (trainerData) => {
    try {
      // Send a POST request with the trainer data
      const response = await axios.post(
        "http://localhost:4000/trainer/add",
        trainerData
      );

      // Handle successful form submission (you can add your logic here)
      console.log("Trainer added successfully:", response.data);

      // Hide the form after submission
      setShowForm(false);
    } catch (error) {
      // Handle any errors during the submission
      console.error("Error adding trainer:", error);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handleAddTrainerClick}
        className="mb-4 bg-dark hover:bg-darker text-whiter font-bold py-2 px-4 rounded transition duration-200"
      >
        Add Trainer
      </button>
      {showForm && <AddTrainerForm onSubmit={handleFormSubmit} />}{" "}
      {/* Conditionally render the form */}
    </div>
  );
};

export default AddTrainer;
