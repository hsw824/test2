import Admin from "./components/admin/Admin";
import EditAdmin from "./components/admin/EditAdmin";
import DashBoard from "./components/dashBoard/DashBoard";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    {
      id: 0,
      userName: "김민수",
      grade: "새싹1",
      age: "21",
      gender: "남자",
    },
    {
      id: 1,
      userName: "홍길동",
      grade: "새싹2",
      age: "21",
      gender: "여자",
    },
  ]);

  const handleEdit = (newInfo: {
    id: number;
    userName: string;
    grade: string;
    age: string;
    gender: string;
  }) => {
    setUser((prev) => {
      return [...prev, newInfo];
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Admin userInfo={user} />} />
      <Route path="/edit" element={<EditAdmin onEdit={handleEdit} />} />
      <Route path="/dash-board" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
