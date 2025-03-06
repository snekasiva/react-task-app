import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedprogress, setAnimatedprogress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedprogress(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedprogress - 100}%)`,
          color: animatedprogress < 5 ? "blue" : "black",
        }}
        role="Progressbar"
        area-valuenow={progress}
        area-valuemax="100"
        area-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};
export default function App() {
  const bars = [1, 10, 30, 50, 70, 90, 100];
  return (
    <div className="App">
      <h1>Progress bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}
