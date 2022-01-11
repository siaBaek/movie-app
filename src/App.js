import { useState, useEffect } from "react";
// import styles from "./App.module.css";
// 컴포넌트를 위한 css 생성이 가능!
function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    };
  }, []);
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
