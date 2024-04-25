import styles from "./AdminItem.module.scss";

interface UserInfoProps {
  userInfo: {
    id: number;
    userName: string;
    grade: string;
    age: string;
    gender: string;
  };
}

export default function AdminItem({ userInfo }: UserInfoProps) {
  return (
    <div className={styles.container} key={userInfo.id}>
      <p>이름:{userInfo.userName}</p>
      <p>등급:{userInfo.grade}</p>
      <p>나이:{userInfo.age}</p>
      <p>성별:{userInfo.gender}</p>
    </div>
  );
}
