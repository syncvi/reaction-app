import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () =>{
    return (
        <div className="header">
            <Link className="link" to="movies" style={{textDecoration:"none", marginLeft:"1rem"}}>Lista Filmów</Link>
            <Link className="link" to="persons" style={{textDecoration:"none"}}>Lista Aktorów</Link>
            <Link className="link" to="profile" style={{textDecoration:"none"}}>Mój Profil</Link>
            <Link className="link" to="register" style={{textDecoration:"none", marginRight:"1rem"}}>Rejestracja</Link>
        </div>
    )
}
export default Header