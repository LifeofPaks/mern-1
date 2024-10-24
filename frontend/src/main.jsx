import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { WorkoutContextProvider } from "./context/WorkoutContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthContextProvider>
        <WorkoutContextProvider>
          <App />
        </WorkoutContextProvider>
      </AuthContextProvider>
    </Router>
  </StrictMode>
);
