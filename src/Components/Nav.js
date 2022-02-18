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



const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5LWQNxLxZevht3cMm8zzlHHvLBtF0Ssfwg&usqp=CAU" className=" mx-2" height="40px" alt="" />
                   </button>
                    <a class="navbar-brand" href="#"><h3><b>ClickUP</b> </h3></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link className='mx-3' style={{ color: "#1a1a1a", textDecoration: "None" }} to="/">Dashboard</Link>
                            <Link className='mx-3' style={{ color: "#1a1a1a", textDecoration: "None" }} to="/users">User</Link>
                            <Link className='mx-3' style={{ color: "#1a1a1a", textDecoration: "None" }} to="/">Settings</Link>
                            </li>
                    
                        </ul>
                        <form class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-light mx-3"><img src={ima} style={{ maxHeight: "20px" }} alt="" /></button>
                                        <button type="button" className="btn btn-light mx-3"><img src={imb} style={{ maxHeight: "20px" }} alt="" /></button>
                        </div> 
                        <a className="navbar-brand mx-3 align-items-center" href="#"><img src={notifications} style={{ maxHeight: "30px" }} alt="" /></a>
                         </li>
                         <li class="nav-item d-flex">
                         <a className="navbar-brand mx-3 align-items-center" href="#"><img src={menu} style={{ maxHeight: "30px" }} alt="" /></a>
                         <a className="navbar-brand mx-3 align-items-center" href="#"><img src={inbox} style={{ maxHeight: "30px" }} alt="" /></a>
                         <a className="navbar-brand mx-3 align-items-center" href="#"><img src={user} style={{ maxHeight: "30px" }} alt="" /></a>
                        </li>
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                <div class="offcanvas-header">
                    <h1 className="offcanvas-title" id="offcanvasNavbarLabel"><b> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5LWQNxLxZevht3cMm8zzlHHvLBtF0Ssfwg&usqp=CAU" className=" mx-2" height="45px" alt="" /> ClickUp</b></h1>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"><img src={dash} alt="" className=" mx-2" height="20px" /> Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/projects"><img src={notifications} height="20px" className=" mx-2" alt="" /> Release Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        

        </>
    );
}

export default Nav;