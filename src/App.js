import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/progress_bar";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 100) {
        setValue((value) => value + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="App">
      <div className="container">
        <span>Progress bar</span>
        <ProgressBar value={value} />
      </div>
    </div>
  );
}

export default App;
