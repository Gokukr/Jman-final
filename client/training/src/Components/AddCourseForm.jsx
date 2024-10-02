import React, { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is installed

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [trainers, setTrainers] = useState([]); // State to hold trainer options
  const [selectedTrainer, setSelectedTrainer] = useState(""); // State for selected trainer
  const [message, setMessage] = useState(""); // State for displaying success or error messages
  console.log(courseName);

  useEffect(() => {
    // Fetch trainers from the backend
    const fetchTrainers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/trainer/fetchTrainers"
        );
        const trainerNames = response.data.map((trainer) => ({
          id: trainer.trainer_id, // Ensure this matches your API response
          name: trainer.name,
        }));
        setTrainers(trainerNames); // Set the trainers state
      } catch (error) {
        console.error("Error fetching trainers:", error);
        setMessage("Failed to fetch trainers.");
      }
    };

    fetchTrainers(); // Fetch trainers when the component mounts
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the selected trainer to check its value
    console.log("Selected Trainer ID:", selectedTrainer); // Check what value is here

    try {
      // Step 1: Add the course to the database
      const courseResponse = await axios.post(
        "http://localhost:4000/course/add",
        {
          name: courseName,
          description, // Assuming your API accepts this parameter
        }
      );

      const newCourse = courseResponse.data; // Assuming the backend returns the newly added course with an id
      console.log(newCourse);

      // Step 2: Assign the course to the selected trainer
      await axios.post("http://localhost:4000/course/add", {
        trainerId: selectedTrainer, // Use the selected trainer's ID
        courseId: newCourse.course_id, // Assuming newCourse contains course_id
      });

      // Clear form fields after submission
      setCourseName("");
      setDescription("");
      setSelectedTrainer("");
      setMessage("Course added and assigned to trainer successfully!");
    } catch (error) {
      console.error("Error adding course and assigning to trainer:", error);
      setMessage("Failed to add course and assign to trainer.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-96"
    >
      {message && <p>{message}</p>} {/* Display success or error message */}
      <div className="mb-4">
        <label htmlFor="courseName" className="block text-mid font-medium mb-2">
          Course Name
        </label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          placeholder="Enter course name"
          required
        />
      </div>
      {/* Uncomment if you want to include description field */}
      {/* <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-mid font-medium mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          placeholder="Enter course description"
          required
        />
      </div> */}
      <div className="mb-4">
        <label htmlFor="trainer" className="block text-mid font-medium mb-2">
          Trainer
        </label>
        <select
          id="trainer"
          value={selectedTrainer}
          onChange={(e) => setSelectedTrainer(e.target.value)} // This will update the state
          className="w-full px-4 py-2 border border-mid rounded focus:outline-none focus:ring-2 focus:ring-mid"
          required
        >
          <option value="" disabled>
            Select a trainer
          </option>
          {trainers.map((trainer) => (
            <option key={trainer.id} value={trainer.id}>
              {trainer.name} {/* Displaying only the trainer's name */}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-dark hover:bg-darker text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default AddCourseForm;
