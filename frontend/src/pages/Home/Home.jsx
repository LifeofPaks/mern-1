import React, { useEffect, useState } from "react";
import WorkoutDetails from "../../components/WorkoutDetails/WorkoutDetails";
import WorkoutForm from "../../components/WorkoutForm/WorkoutForm";
import { useWorkoutsContext } from "../../hooks/useWorkoutContext";
import { useAuthContext } from "../../hooks/useAuthContext";



const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();
  const {user} = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts", {
          headers:{
            "Authorization":`Bearer ${user.token}`
          }
        }); 
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

    if(user){

      fetchWorkouts();
    }
  }, [dispatch, user]);

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
