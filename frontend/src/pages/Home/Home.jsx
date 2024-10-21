import React, { useEffect, useState } from "react";
import WorkoutDetails from "../../components/Navbar/WorkoutDetails/WorkoutDetails";
WorkoutDetails;

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [error, setError] = useState(null); // To capture any errors

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts"); // Fetch from /api
        const json = await response.json();

        if (response.ok) {
          setWorkouts(json);
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.error(err.message); // Catch and log any error
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {error && <p>Error: {error}</p>} {/* Display error if any */}
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
