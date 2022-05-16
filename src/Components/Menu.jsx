import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import './Menu.css'

function Menu() {
   return(
    <Fragment>
        <div className="con">
            <nav className="nav">
                <ul>
                    <li><Link to="/Inicio">Inicio</Link></li>
                    <li><Link to="/Fotos">Fotos</Link></li>
                    <li><Link to="/Videos">Videos</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    </Fragment>
   )
}

export default Menu;