import React, { Fragment } from "react"
import Menu from "../Components/Menu"
import './Contacto.css'

function Contacto(){
    return(
        <Fragment>
            <section>
                <Menu />
                <div className="container">
                    <h1>SECCION DE CONTACTOS</h1>
                </div>
            </section>
        </Fragment>
    )
}

export default Contacto