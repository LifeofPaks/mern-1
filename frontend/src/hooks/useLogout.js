import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";


export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutsContext();

  const logout = () => {
    //REMOVE USER FROM LOCAL STORAGE
    localStorage.removeItem("user");

    //DISPATCH LOGOUT ACTION
    dispatch({type:"LOGOUT"})
    workoutDispatch({type:"SET_WORKOUTS", payload:null})
  };

  return {logout}
};
