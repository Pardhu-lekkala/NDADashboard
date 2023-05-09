import React, { useState } from "react";
import { LineChart, Line,Legend } from "recharts";
import { useInterval } from "react-use";
import '../lineGraph/index.css'


const generateData = () => {
  const now = new Date();
  const value1 = Math.floor(Math.random() * 10) + 1;
  const value2 = value1 + 2;
  const value3 = value2 + 2
  return { time: now, value1, value2, value3 };
};

const LineChartGraph = () => {
  const [data, setData] = useState([{ time: new Date(), value1: 0, value2: 0, value3: 0 }]);

  useInterval(() => {
    setData(prevData => [...prevData.slice(-99), generateData()]);
  }, 100);

  return (
    <div className="main-div"> 
    <div className="line-graph-cont">
        <div className="legend-cont">
            <div className="fixed-marg">
                <div className="leg-cont1"></div>
                <p className="leg-sty">Direct</p>
            </div>
            <div className="fixed-marg">
                <div className="leg-cont2"></div>
                <p className="leg-sty">Local</p>
            </div>
            <div className="fixed-marg">
                <div className="leg-cont3"></div>
                <p className="leg-sty">Remote</p>
            </div>
        </div>
        <div className="line-chart-cont">
            <LineChart width={600} height={100} data={data}>
                <Line type="linear" dataKey="value1" stroke="#C541B8" strokeWidth={2} animationDuration={50} dot={false} />
                <Line type="linear" dataKey="value2" stroke="#63C178" strokeWidth={2} animationDuration={50} dot={false} />
                <Line type="linear" dataKey="value3" stroke="#40DDF4" strokeWidth={2} animationDuration={50} dot={false} />
            </LineChart>
        </div>
    </div>
    <div className="line-graph-cont">
        <div className="legend-cont">
            <div className="fixed-marg">
                <div className="leg-cont1"></div>
                <p className="leg-sty">Direct</p>
            </div>
            <div className="fixed-marg">
                <div className="leg-cont2"></div>
                <p className="leg-sty">Local</p>
            </div>
            <div className="fixed-marg">
                <div className="leg-cont3"></div>
                <p className="leg-sty">Remote</p>
            </div>
        </div>
        <div className="line-chart-cont">
            <LineChart width={600} height={100} data={data}>
                <Line type="linear" dataKey="value1" stroke="#C541B8" strokeWidth={2} animationDuration={50} dot={false} />
                <Line type="linear" dataKey="value2" stroke="#63C178" strokeWidth={2} animationDuration={50} dot={false} />
                <Line type="linear" dataKey="value3" stroke="#40DDF4" strokeWidth={2} animationDuration={50} dot={false} />
            </LineChart>
        </div>
    </div>
</div>
  );
};

export default LineChartGraph;