import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {

    return(
        <div className="navbar">
            <p>Logo</p>
            <ul>
            {/* free-user-login-icon-3057-thumb.png */}
                <li><Link to="/"><img src='1946488.png' width={20} style={{ backgroundColor: "white" }} /></Link></li>
                <li><Link to="/cart"><img src='3916598.png' width={20} style={{ backgroundColor: "white" }} /></Link></li>
                <li><Link to="/login"><img src='free-user-login-icon-3057-thumb.png' width={20} style={{ backgroundColor: "white" }} /></Link></li>
            </ul>
        </div>
    )
}

export default Navbar