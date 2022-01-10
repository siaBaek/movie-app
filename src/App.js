import Button from "./Button";
import styles from "./App.module.css";
// 컴포넌트를 위한 css 생성이 가능!

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
