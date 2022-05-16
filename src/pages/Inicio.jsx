import './Inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Components/Menu.jsx';
import Parallax from '../Components/Parallax';
import Paisaje from '../images/img1.jpg'
import Paisaje2 from '../images/img2.jpg'
import { Fragment } from 'react';

function Inicio() {
  return (
    
      <Fragment>
        <Menu />
        <Parallax bg={Paisaje} alto={"100vh"} ancho={"100%"} sesgoAbajo={"sesgoAbajoDerecha"}/>
        <Parallax bg={"#fff"} alto={"50vh"} ancho={"100%"}/>
        <Parallax bg={Paisaje2} alto={"100vh"} ancho={"100%"} 
                  sesgoArriba={"sesgoArribaIzquierda"} sesgoAbajo={"sesgoAbajoIzquierda"} />
        <Parallax bg={"#fff"} alto={"50vh"} ancho={"100%"}/>
        <Parallax bg={Paisaje} alto={"100vh"} ancho={"100%"} sesgoArriba={"sesgoArribaDerecha"}/>
       </Fragment>
    );
}

export default Inicio;
