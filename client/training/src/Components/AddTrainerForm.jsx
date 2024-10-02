import React, { useState } from "react";
import axios from "axios"; // Axios for HTTP requests

const AddTrainerForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit prop with the trainer data
    onSubmit({ name, course, email });

    // Clear the form fields
    setName("");
    setCourse("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-whiter shadow-md rounded-lg p-6 w-96"
    >
      <div className="mb-4">
        <label
          htmlFor="trainerName"
          className="block text-mid font-medium mb-2"
        >
          Trainer Name
        </label>
        <input
          type="text"
          id="trainerName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          placeholder="Enter trainer name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="course" className="block text-mid font-medium mb-2">
          Course
        </label>
        <input
          type="text"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          placeholder="Enter course name"
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
    </form>
  );
};

export default AddTrainerForm;
