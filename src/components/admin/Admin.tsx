import { useState } from "react";
import styles from "./Admin.module.scss";
import AdminItem from "./AdminItem";
import { useNavigate } from "react-router-dom";

interface UserInfoProps {
  userInfo: {
    id: number;
    userName: string;
    grade: string;
    age: string;
    gender: string;
  }[];
}

export default function Admin({ userInfo }: UserInfoProps) {
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/edit");
  };
  return (
    <div className={styles.container}>
      <AdminItem userInfo={userInfo} />
      <button className={styles.button} onClick={goToEdit}>
        +
      </button>
    </div>
  );
}
