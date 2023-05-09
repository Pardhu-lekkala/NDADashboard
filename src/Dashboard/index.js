import React from 'react';
import '../Dashboard/index.css'
import SideBar from '../SideBar';
import LineChartGraph from '../lineGraph';
import HeatMapGrid from '../heatGraph';
import CricularGraph from '../CircularGraph';

function Dashboard() {
  return (
    <div className="main-back">
      <div className='side-div'>
        <SideBar/>
      </div>
      <div className='dashboard-div'>
        <div>
          <h1 className='content-sty'>Server</h1>
          <div className='button-div'>
            <button className='server-btn' style={{border:"1px solid #39C0B8",color:"#ffffff",background:"linear-gradient(135deg, #40DDFF 0%, #14BAE3 19.24%, #13B1E6 68.64%, #11AADF 81.77%, #0B98C5 100%)"}}>Server 1</button>
            <button className='server-btn' style={{border:"1px solid #39C06F",color:"#39C0B8"}}>Server 2</button>
            <button className='server-btn' style={{border:"1px solid #39C06F",color:"#39C06F"}}>Server 3</button>
            <button className='server-btn' style={{border:"1px solid #C18970",color:"#C18970"}}>Server 4</button>
            <button className='server-btn' style={{border:"1px solid #E99E25",color:"#E99E25"}}>Server 5</button>
          </div>
        </div>
        <div className='fixed-marg'>
          <HeatMapGrid/>  
        </div>
        <div className='fixed-marg'>
          <LineChartGraph/>
        </div>
        <div className='fixed-marg'>
          <CricularGraph/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
