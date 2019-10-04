import React from 'react'
import "../../../src/index.css"
import image from "../home/carfixlogo.png"
function Home() {
  return (
    <div>
        <div className="background-video"  alt="mexico" >
          <div className="Info">
             <img src={image} width="30%" height="20%"alt="" />
          </div>
        <div className="Info">
        <div className="box ">
        <div>
              <h1><strong> Asistencia para las emergencias de tu auto en donde estés</strong></h1>
         </div> 
         <h6>Carfix está para apoyarte con las principales emergencias de tu auto como:</h6>
           <li>Cambio de llanta de refacción</li>
          <li>Paso de corriente a batería</li>
          <li>Servicio de grúa</li>
        <li>Abasto de combustible</li>
            <a className=" button is-success" href="/auth/signup"><strong>Regístrate</strong></a>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
