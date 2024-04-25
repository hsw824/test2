import Admin from "./components/admin/Admin";
import DashBoard from "./components/dashBoard/DashBoard";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/dash-board" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
