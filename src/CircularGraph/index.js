import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../CircularGraph/index.css";

function CricularGraph() {
  const [data, setData] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(Math.floor(Math.random() * 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="circle-main-div">
      <div className="div-circle">
        <CircularProgressbar
          value={data}
          text={`${data} GB`}
          strokeWidth={5}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: "#C541B8",
            trailColor: "#184975",
            textSize: "16px",
            textColor: "#C541B8",
          })}
        />
      </div>
      <div className="div-circle">
        <CircularProgressbar
          value={data}
          text={`${data} GB`}
          strokeWidth={5}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: "#63C178",
            trailColor: "#184975",
            textSize: "16px",
            textColor: "#63C178",
          })}
        />
      </div>
      <div className="div-circle">
        <CircularProgressbar
          value={data}
          text={`${data} GB`}
          strokeWidth={5}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: "#40DDF4",
            trailColor: "#184975",
            textSize: "16px",
            textColor: "#40DDF4",
          })}
        />
      </div>
    </div>
  );
}

export default CricularGraph;
