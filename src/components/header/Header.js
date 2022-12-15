import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () =>{
    return (
        <div className="header">
            <Link className="link" to="/" style={{textDecoration:"none"}}>MovieDB</Link>
            <Link className="link" to="/movies/mostClicked" style={{textDecoration:"none"}}>Najpopularniejsze Filmy</Link>
            <Link className="link" to="/movies/topRated" style={{textDecoration:"none"}}>Najlepsze Filmy</Link>
            <Link className="link" to="/movies/comingSoon" style={{textDecoration:"none"}}>Nadchodzące filmy</Link>
            <Link className="link" to="profile" style={{textDecoration:"none"}}>Profil</Link>
            <Link className="link" to="register" style={{textDecoration:"none"}}>Rejestracja</Link>
        </div>
    )
}
export default Header