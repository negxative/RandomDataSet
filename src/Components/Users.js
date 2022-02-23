import React, { useState } from 'react';
import data from "./ds.json"
import './Users.css'
const Users = () => {
    let i = 1;
    let total = 0;
    
    return (

        <div className='container mb-3'>

            <table className="table my-5"  id="red">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" >User </th>
                        <th scope="col"><center>Country</center></th>
                        <th scope="col"><center>Units</center></th>
                        <th scope="col"><center>Payment Method</center></th>
                        <th scope="col">Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el) => {
                        let a=(el.Orders/el['Available Units'])*100;
                        let b="";
                        if(a<25) b="info";
                        else if(a<50) b="success";
                        else if(a<75) b="warning";
                        else b="danger";
                        return <>
                            <tr key={el.user}>
                                <th><img src={el.pic} height="25px" width="25px" alt="" style={{borderRadius:"50px"}} /></th>
                                <td>{el.user}</td>
                                <td><center><img src={el.country} height="10px" alt="" /></center></td>
                                <td >
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <b>{el.Orders}</b>
                                            <span>{el.date}</span>
                                        </div>
                                        <div>

                                            <div className="progress" style={{ height: "5px" }}>
                                                <div className={`progress-bar bg-${b}`} role="progressbar" style={{ width: `${a}%` }} ></div>
                                            </div>
                                        </div>
                                    </div></td>

                                <td>
                                    <center><img src={el.Payement} height="20px" alt="" /></center>
                                </td>
                                <td>{el.Activity}</td>
                            </tr>
                        </>
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default Users;