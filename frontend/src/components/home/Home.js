import React from 'react'
import "../../../src/index.css"
import image from "../home/carfixlogo.png"
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer'
function Home() {
  return (
    <div>
        <div className="background-video"  alt="mexico" >
          <div className="Info">
             <img src={image} width="30%" height="30%"alt="" />
          </div>
        <div className="Info">
        <div className="box ">
        <div>
              <h1 className="slogan"><strong> Asistencia para las emergencias de tu auto en donde estés</strong></h1>
         </div> 
         <h6>Carfix está para apoyarte con las principales emergencias de tu auto como:</h6>
           <li>Cambio de llanta de refacción</li>
          <li>Paso de corriente a batería</li>
          <li>Servicio de grúa</li>
        <li>Abasto de combustible</li>
            <div className="buttons is-centered">
            <Link className=" button is-success" to="/auth/signup"><strong>Regístrate </strong></Link>      
            ó <Link className=" button is-info" to="/auth/login"><strong>Inicia Sesión </strong></Link>
            </div>
          </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;
