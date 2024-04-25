import { useState } from "react";
import styles from "./Admin.module.scss";
import AdminItem from "./AdminItem";
export default function Admin() {
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
  return (
    <div className={styles.container}>
      {user.map((info) => {
        return <AdminItem userInfo={info} key={info.id} />;
      })}

      <button className={styles.button}>+</button>
    </div>
  );
}
