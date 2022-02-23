import {  CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, AreaChart,Area, LabelList } from 'recharts';
import data from "./ds.json"
import React,{useState} from 'react';
import './chart.css'



const Cht = () => {
 
  return <>
  
    <div className="container my-3" id="chart"  >
      <div className="d-flex justify-content-between align-items-center">
        <div >
          <h3>Order Records</h3>
          For Five Dyas
        </div>
        <div className="d-dlex justify-content-end ">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary">Day</button>
            <button type="button" className="btn btn-outline-primary">Month</button>
            <button type="button" className="btn btn-outline-primary">Year</button>
          </div>
        </div>
      </div>
     
      
        <AreaChart width={1200} height={300} data={data} id="dam">
          <Area type="monotone" dataKey="Orders"  stroke="blue" fill="#c4c4c4" id="guy" />
          <Area type="monotone" dataKey="Available Units" stroke="Green" fill="#c4c4c4" id="puy"/>
          <Tooltip/>
          <Legend  />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
        </AreaChart>
      
      </div>
  </>
}


export default Cht;