import React from 'react';
import Cht from './Cht';
import Users from './Users';

const Dashboard = () => {
    return (
        <div>
            <div className="container">
            <Cht/>
            <Users/>
            </div>
        </div>
    );
}


export default Dashboard;