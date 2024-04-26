import styles from "./AdminItem.module.scss";

interface UserInfoProps {
  userInfo: {
    id: string;
    userName: string;
    grade: string;
    age: string;
    gender: string;
  }[];
}

export default function AdminItem({ userInfo }: UserInfoProps) {
  return (
    <>
      {userInfo.map((item) => (
        <div className={styles.container} key={item.id}>
          <p>이름:{item.userName}</p>
          <p>등급:{item.grade}</p>
          <p>나이:{item.age}</p>
          <p>성별:{item.gender}</p>
        </div>
      ))}
    </>
  );
}
