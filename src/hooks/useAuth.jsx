import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const login = (username, password) => {
    if (username && password) {
      localStorage.setItem("user", username);
      setUser(username);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const isAuthenticated = !!user;

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
}
