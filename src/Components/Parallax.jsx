import React, { Component } from 'react';
import './Parallax.css'

class Parallax extends Component {
    render() {
        return (
                <section className='parallax' style={{
                backgroundImage: `url(${this.props.bg})`,
                width: `${this.props.ancho}`,
                height: `${this.props.alto}`
                }}>
                    <div className={this.props.sesgoArriba}>

                    </div>

                    <div className={this.props.sesgoAbajo}>

                    </div>
                </section>
        );
    }
}


export default Parallax;
