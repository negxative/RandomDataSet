import React, { useState } from 'react';
import data from "./ds.json"
const Users = () => {
    let i = 1;
    let total = 0;
    let style = {

        boxShadow: " 10px 10px 10px #ebebeb",
        background: "#f5f5f5",
        borderRadius: "5px",

    }
    return (

        <div>

            <table class="table my-5" style={style}>
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
                    {
                        data.forEach((e) => {
                            total += e.units;
                        }),
                        data.forEach((e) => {
                            e["percentage"] = (e.units / total) * 100;
                        })

                    }
                    {data.map((el) => {
                        return <>
                            <tr key={el.user}>
                                <th scope="row"><img src={el.pic} height="40px" width="40px" alt="" style={{borderRadius:"50px"}} /></th>
                                <td>{el.user}</td>
                                <td><center><img src={el.country} height="10px" alt="" /></center></td>
                                <td >
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <h5>{el.units}</h5>
                                            <span>{el.date}</span>
                                        </div>
                                        <div>

                                            <div class="progress" style={{ height: "5px" }}>
                                                <div class="progress-bar bg-success" role="progressbar" style={{ width: `${el.percentage}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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