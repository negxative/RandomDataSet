import { borderRadius } from '@mui/system';
import React, {useState} from 'react';
let i=0;
const Cards = () => {
        let [gsf,setGsf]=useState([]);
     

    async function componentDidMount() {
        if(i<=30){
        let url="https://api.github.com/users";
        let data = await (await fetch(url)).json()
        setGsf(data)
        i++;
        }
    }
    componentDidMount();
    
    let style={
        boxShadow:" 10px 5px 20px #ebebeb",
        background:"#f5f5f5",
        borderRadius:"5px",
        width: "18rem"
    }
   


    return (

        <div>
            <div className="container" >
            <div className="d-flex">
                        <div className=' col-md-4 my-3 mr-2 '><center><h2 style={{ borderTop:"5px solid #ff5938"}} >Ready</h2></center></div>
                        <div className=' col-md-4 my-3 mx-2'><center><h2  style={{ borderTop:"5px solid #4efc6b"}}>InProgress</h2></center></div>
                        <div className=' col-md-4 my-3 ml-2'><center><h2  style={{ borderTop:"5px solid #003d8c"}}>Review</h2></center></div>
                    </div>
                <div className="row">
                  
                    {gsf.map((el) => {
                        return( 
                        <div className="col-md-4 my-3" >
                        <div class="mx-5" style={style} key={el.id} >
                        <div class="card-body" >
                        <div className="d-flex  justify-content-between">
                        <h5 className="card-title">{el.login}</h5>
                         <img src={el.avatar_url}  height="40px" style={{borderRadius:"10px"}} alt="" />
                        </div>
                          <div className="d-flex justify-content-between align-items-center my-4 ">
                           <h6 className="card-subtitle mb-2">{el.node_id}</h6>
                          <a href={el.url} style={{color:"#ff6745",textDecoration:"None"}} className="card-link">GitHub Link</a>
                        </div>
                          
                         
                        </div>
                      </div>
                      </div>)
                    })}

                </div>
            </div>
        </div>);
}

export default Cards;