import React, { useEffect, useState } from "react";
import WorkoutDetails from "../../components/WorkoutDetails/WorkoutDetails";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import { useWorkoutsContext } from "../../hooks/useWorkoutContext";


const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts"); 
        const json = await response.json();

        if (response.ok) {
          dispatch({type:"SET_WORKOUTS", payload: json})
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.error(err.message); 
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;
