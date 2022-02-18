import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import data from "./ds.json"


import React from 'react';

const Cht = () => {
  return <div >
    <div className="container my-3">
      <div className="d-flex justify-content-between align-items-center">
        <div >
          <h3>Random Data Set</h3>
          For Five Dyas
        </div>
        <div className="d-dlex justify-content-end ">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary">Left</button>
            <button type="button" className="btn btn-outline-primary">Middle</button>
            <button type="button" className="btn btn-outline-primary">Right</button>
          </div>
        </div>
      </div>
      <div className="container" style={{ overflow: "scroll" }}>
        <LineChart width={1150} height={300} data={data}>
          <Line type="monotone" dataKey="units" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  </div>;
}


export default Cht;