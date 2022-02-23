import { Hidden } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import data from "./data.json"
let i = 0;
const Cards = () => {
    let [gsf, setGsf] = useState([]);


    async function componentDidMount() {
        if (i <= 30) {
            let url = "https://api.github.com/users";
            let data = await (await fetch(url)).json()
            setGsf(data)
            i++;
        }
    }
    componentDidMount();

    let style = [{
        borderTop:"solid 4px #8942df",
        boxShadow: " 10px 5px 20px #dfdede",
        background: "#f5f5f5",
        borderRadius: "3px"
    },{ 
    borderTop:"Solid 4px #0089e6",
    boxShadow: " 10px 5px 20px #dfdede",
    background: "#f5f5f5",
    borderRadius: "3px"
    }, {borderTop:"solid 4px #ffda00",
    boxShadow: " 10px 5px 20px #dfdede",
    background: "#f5f5f5",
    borderRadius: "3px"
    },{
    marginTop:"20px",
    boxShadow: " 10px 5px 20px #dfdede",
    background: "#f5f5f5",
    borderRadius: "8px"
    }]

    let count = {
        border: "solid 1px #757575",
        fontSize: "15px",
        marginLeft: "20px",
        color: "#757575",
        borderRadius: "50px",
        padding: "0px 8px 0px 8px"
    }



    return (
        <div>
            <div className="container-sm" style={{ maxWidth: "80", alignItems: "center" }} >
                 <div  style={{boxShadow: " 0px 10px 10px #f3f0f0",borderRadius:"10px"}}>
                    <h2> <img src="https://t4.ftcdn.net/jpg/01/75/85/33/360_F_175853300_IxHH36rul4weabVGix3pUBrFqfjDtE21.jpg" alt=""  style={{height:"100px",width:"100px",borderRadius:"50px"}}/> Release Projects</h2>
                </div>
                <div class="d-flex flex-wrap justify-content-center ">
                    <div class="d-flex flex-column bd-highlight mx-3 my-3" style={{ minWidth: "350px",maxWidth:'30%' }}>
                        <div class="p-3 bd-highlight" style={style[0]}>
                            <h5 class="mx-3">Ready <span style={count}>{data.Ready.length}</span></h5>
                        </div>
                        {data.Ready.map((el) => {
                            return <>
                                <div class="" style={style[3]} >
                                    <div class="d-flex flex-row bd-highlight mb-3 justify-content-between" >
                                        <div class="p-2 bd-highlight">
                                            <div class="d-flex flex-column bd-highlight mb-3 justify-content-between">
                                                <div class="p-2 bd-highlight" style={{fontSize:"12px",color:"grey"}}>{"Release Project>Stage 1"}</div>
                                                <div class="d-flex flex-row bd-highlight mb-3 justify-content-between" style={{fontSize:"18px"}}>
                                                     <span>{el.desc}</span> 
                                                     </div>
                                                <div class="p-2 bd-highlight" > <img src={el.flag}  style={{height:"30px"}} /> </div>
                                            </div>
                                        </div>
                                        <div class="p-2 bd-highlight align-items-strech"> <img src={el.pix} alt="" style={{height:"50px",width:"50px",borderRadius:"50px"}}  /></div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                    <div class="d-flex flex-column bd-highlight mx-3 my-3" style={{ minWidth: "350px",maxWidth:'30%' }} >
                        <div class="p-3 bd-highlight" style={style[1]}>
                            <h5>In Progress <span style={count}>{data.InProgress.length}</span> </h5>
                        </div>
                        {data.InProgress.map((el) => {
                            return <>
                               <div class="p-2 bd-highlight" style={style[3]} >
                                    <div class="d-flex flex-row bd-highlight mb-3 justify-content-between" >
                                        <div class="p-2 bd-highlight">
                                            <div class="d-flex flex-column bd-highlight mb-3 justify-content-between">
                                                <div class="p-2 bd-highlight" style={{fontSize:"12px",color:"grey"}}>{"Release Project>Stage 1"}</div>
                                                <div class="d-flex flex-row bd-highlight mb-3 justify-content-between" style={{fontSize:"18px"}}>
                                                     <span>{el.desc}</span> 
                                                     </div>
                                                <div class="p-2 bd-highlight" > <img src={el.flag}  style={{height:"30px"}} /> </div>
                                            </div>
                                        </div>
                                        <div class="p-2 bd-highlight"> <img src={el.pix} alt="" style={{height:"50px",width:"50px",borderRadius:"50px"}}  /></div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                    <div class="d-flex flex-column bd-highlight mx-3 my-3"  style={{ minWidth: "350px",maxWidth:'30%' }} >
                        <div class="p-3 bd-highlight" style={style[2]}>
                            <h5>Reveiw <span style={count}>{data.Review.length}</span></h5>
                        </div>
                        {data.Review.map((el) => {
                            return <>
                                <div class="p-2 bd-highlight" style={style[3]} >
                                    <div class="d-flex flex-row bd-highlight mb-3 justify-content-between" >
                                        <div class="p-2 bd-highlight">
                                            <div class="d-flex flex-column bd-highlight mb-3 justify-content-between">
                                                <div class="p-2 bd-highlight" style={{fontSize:"12px",color:"grey"}}>{"Release Project>Stage 1"}</div>
                                                <div class="d-flex flex-row bd-highlight mb-3 justify-content-between" style={{fontSize:"18px"}}>
                                                     <span>{el.desc}</span> 
                                                     </div>
                                                <div class="p-2 bd-highlight" > <img src={el.flag}  style={{height:"30px"}} /> </div>
                                            </div>
                                        </div>
                                        <div class="p-2 bd-highlight"> <img src={el.pix} alt="" style={{height:"50px",width:"50px",borderRadius:"50px"}}  /></div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
