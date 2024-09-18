import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const BI = () => {
    return (
        <div>
            <h1>Business Intelligence Dashboard</h1>
            <nav>
                <Link to="line">Line Chart</Link> |
                <Link to="bar">Bar Chart</Link> |
                <Link to="pie">Pie Chart</Link>
            </nav>
            {/* The Outlet component is used to render the nested routes (charts in this case) */}
            <div className="chart-container">
                <Outlet />
            </div>
        </div>
    );
};

export default BI;
