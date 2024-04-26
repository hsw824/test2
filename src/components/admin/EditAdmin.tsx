import { useNavigate } from "react-router-dom";
import styles from "./EditAdmin.module.scss";
import { useState } from "react";

interface newItemType {
  id: number;
  userName: string;
  grade: string;
  age: string;
  gender: string;
}

export default function AdminEdit({
  onEdit,
}: {
  onEdit: (newItem: newItemType) => void;
}) {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/");
  };
  const [input, setInput] = useState({
    userName: "",
    grade: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEdit({
      ...input,
      id: 4,
    });
    setInput({ userName: "", grade: "", age: "", gender: "" });
  };
  return (
    <div className={styles.container}>
      <button className={styles.goBackButton} onClick={goToBack}>
        뒤로가기
      </button>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="userName">
          이름{" "}
          <input
            type="text"
            id="userName"
            name="userName"
            className={styles.input}
            value={input.userName}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="grade">
          등급
          <input
            type="text"
            id="grade"
            name="grade"
            className={styles.input}
            value={input.grade}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="age">
          나이
          <input
            type="text"
            id="age"
            name="age"
            className={styles.input}
            value={input.age}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="gender">
          성별
          <input
            type="text"
            id="gender"
            name="gender"
            className={styles.input}
            value={input.gender}
            onChange={handleInputChange}
          />
        </label>
        <button className={styles.button}>추가하기</button>
      </form>
    </div>
  );
}
