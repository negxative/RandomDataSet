import React from 'react';
import img from "./favicon.ico"
import { Link } from "react-router-dom";
import ima from "./moon.png"
import imb from "./sunny.png"
import menu from "./menu.png"
import menuD from "./menuD.png"
import inbox from "./inbox.png"
import notifications from "./notification.png"
import user from "./user.png"
import dash from "./dash.png"
import arrow from "./arrow.png"



const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid">
                <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                                <img src={arrow} className=" mx-2" height="25   px" alt="" />
                   </button>
                    <a className="navbar-brand" href="#"><img src="https://clickup.com/landing/images/brand-assets/logo-color-transparent.svg" height="35px" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex justify-content-between">
                            <Link className='mx-3' style={{ color: "#1a1a1a", textDecoration: "None" }} to="/">Dashboard</Link>
                            <Link className='mx-3' style={{ color: "#1a1a1a", textDecoration: "None" }} to="/users">User</Link>
                            <Link className='mx-3' style={{ color: "#1a1a1a", textDecoration: "None" }} to="/">Settings</Link>
                            </li>
                    
                        </ul>
                        <ul className="navbar-nav d-flex justify-content-end ">
                        <li className="nav-item  d-flex justify-content-between align-items-center">
                        <span><button type="button" className="btn btn-light mx-2"><img src={ima} style={{ maxHeight: "20px" }} alt="" /></button></span> 
                         <span><button type="button" className="btn btn-light mx-3"><img src={imb} style={{ maxHeight: "20px" }} alt="" /></button></span>
                        <span><a className="navbar-brand mx-3 " href="#">
                            <img src={notifications} style={{ maxHeight: "20px" }} alt="" />
                        </a></span>
                         </li>
                         <li className="nav-item d-flex justify-content-between">
                         <a className="navbar-brand mx-3 align-items-center" href="#"><img src={menu} style={{ maxHeight: "20px" }} alt="" /></a>
                         <a className="navbar-brand mx-3 align-items-center" href="#"><img src={inbox} style={{ maxHeight: "20px" }} alt="" /></a>
                         <a className="navbar-brand  align-items-center" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa31xKmnI6rYS9nSNXJNOewF7o1E49L6r_Q&usqp=CAU" style={{ maxHeight: "35px",borderRadius :"50px" }} alt="" /></a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                <div className="offcanvas-header">
                    <img src="https://clickup.com/landing/images/brand-assets/logo-color-transparent.svg" height="50px" alt="" />
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" style={{linkColor:"black"}}>
                        <li className="nav-item"  >
                            <Link className="nav-link active" style={{color:"grey"}} aria-current="page" to="/"><img src={dash} alt="" className=" mx-2" height="20px"  /> Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{color:"grey"}} aria-current="page" to="/projects"><img src={notifications} height="20px" className=" mx-2" alt="" /> Release Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        

        </>
    );
}

export default Nav;