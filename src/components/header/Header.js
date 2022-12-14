import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () =>{
    return (
        <div className="header">
            <Link className="link" to="/" style={{textDecoration:"none"}}>LinkDoKija</Link>
            <Link className="link" to="/movies/mostClicked" style={{textDecoration:"none"}}>LinkDoKijaClicked</Link>
            <Link className="link" to="/movies/topRated" style={{textDecoration:"none"}}>LinkDoKijaRated</Link>
            <Link className="link" to="/movies/comingSoon" style={{textDecoration:"none"}}>LinkDoKijaComing</Link>

        </div>
    )
}
export default Header