import React, { Fragment } from "react";
import Menu from "../Components/Menu";
import './Videos.css'

function Videos(){
    return(
        <Fragment>
            <section>
                <Menu />
                <div className="container">
                    <h1>SOY LA SECCION DE VIDEOS</h1>
                </div>
            </section>
        </Fragment>
    )
}

export default Videos