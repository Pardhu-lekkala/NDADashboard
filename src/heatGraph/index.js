import React, { useState, useEffect } from "react";
import HeatMap from "react-heatmap-grid";
import './index.css'

function HeatMapGrid() {
  const xLabels = ["1", "2", "3", "4", "5", "6", "7"];
  const yLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [data, setData] = useState(
    new Array(yLabels.length)
      .fill(0)
      .map(() =>
        new Array(xLabels.length).fill(Math.floor(Math.random() * 2))
      )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevState) =>
        prevState.map((row) =>
          row.map((col) => (Math.random() < 0.5 ? 0 : 1))
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-div">
      <div className="graph-cont">
            <h1 className="data-sty">Direct Attached memories  <span> 651.65 GB / <span>63572 GB </span></span></h1>
            <HeatMap
            background={"#70c9f0"}
            height={24}
            squares={true}
            xLabels={xLabels}
            yLabels={yLabels}
            data={data}
            cellStyle={(background, value, min, max, data, x, y) => ({
                background: value === 0 ? "#6CFFFB" : "#184975",
                fontSize: "18px",
                borderRadius: "5px",
                border: "1px solid #fff",
                height:"20px",
                width:"50px"
            })}
            cellShape={(background, value, min, max, data, x, y, size) => {
                const cellSize = `${size - 1}px`;
                return (
                <rect
                    width={cellSize}
                    height={cellSize}
                    x={x}
                    y={y}
                    rx="5"
                    ry="5"
                    style={{ fill: background }}
                />
                );
            }}
            />
      </div>
      <div className="graph-cont">
            <h1 className="data-sty">Direct Attached memories  <span> 651.65 GB / <span>63572 GB </span></span></h1>
            <HeatMap
            background={"#70c9f0"}
            height={24}
            squares={true}
            xLabels={xLabels}
            yLabels={yLabels}
            data={data}
            cellStyle={(background, value, min, max, data, x, y) => ({
                background: value === 0 ? "#13B3E5" : "#184975",
                fontSize: "18px",
                borderRadius: "5px",
                border: "1px solid #fff",
                height:"20px",
                width:"50px"
            })}
            cellShape={(background, value, min, max, data, x, y, size) => {
                const cellSize = `${size - 1}px`;
                return (
                <rect
                    width={cellSize}
                    height={cellSize}
                    x={x}
                    y={y}
                    rx="5"
                    ry="5"
                    style={{ fill: background }}
                />
                );
            }}
            />
      </div>
      <div className="graph-cont">
            <h1 className="data-sty">Direct Attached memories  <span> 651.65 GB / <span>63572 GB </span></span></h1>
            <HeatMap
            background={"#70c9f0"}
            height={24}
            squares={true}
            xLabels={xLabels}
            yLabels={yLabels}
            data={data}
            cellStyle={(background, value, min, max, data, x, y) => ({
                background: value === 0 ? "#C18970" : "#184975",
                fontSize: "18px",
                borderRadius: "5px",
                border: "0px solid #fff",
                height:"20px",
                width:"50px"
            })}
            cellShape={(background, value, min, max, data, x, y, size) => {
                const cellSize = `${size - 1}px`;
                return (
                <rect
                    width={cellSize}
                    height={cellSize}
                    x={x}
                    y={y}
                    rx="5"
                    ry="5"
                    style={{ fill: background }}
                />
                );
            }}
            />
      </div>
      </div>
  );
}

export default HeatMapGrid;
