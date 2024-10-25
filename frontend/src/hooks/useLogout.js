import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //REMOVE USER FROM LOCAL STORAGE
    localStorage.removeItem("user");

    //DISPATCH LOGOUT ACTION
    dispatch({type:"LOGOUT"})
  };

  return {logout}
};
