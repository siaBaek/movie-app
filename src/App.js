import { useState, useEffect } from "react";
// import styles from "./App.module.css";
// 컴포넌트를 위한 css 생성이 가능!

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []); // 처음 실행 때 1번만 실행
  // useEffect(()=>{실행하려는 코드}, [지켜보는 것])
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때 (인풋 입력할 때)만 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); // counter가 변화할 때 (클릭할 때)만 실행
  useEffect(() => {
    console.log("I run when keyworkd & counter change");
  }, [keyword, counter]); // 둘 중 하나 변화할 때만 실행
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
