import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import SweDashboard from "./pages/SweDashboard";
import UxUiDashboard from "./pages/UxUiDashboard";
import CreateSweResumePage from "./pages/CreateSweResumePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/swe" element={<SweDashboard />} />
        <Route exact path="/uxui" element={<UxUiDashboard />} />
        <Route
          exact
          path="/create-swe-resume"
          element={<CreateSweResumePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
