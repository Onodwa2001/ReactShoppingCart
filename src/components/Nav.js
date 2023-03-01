import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {

    return(
        <div className="navbar">
            <p>Logo</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    )
}

export default Navbar