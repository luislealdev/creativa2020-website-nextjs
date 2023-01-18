import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';

export const Clients = () => {
  const [isHovering, setIsHovering] = useState(0);

  return (
    <section id="clients" className="w3-center">
      <div className="container" data-aos="zoom-out">
        <h3><strong>PROYECTOS ACTUALES</strong></h3>
        <div className="grid-3">
          <div onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
            <img src={`./img/clients/VC${isHovering == 1 ? 2 : 1}.png`} alt="" />
          </div>
          <div onMouseOver={() => setIsHovering(2)} onMouseOut={() => setIsHovering(0)}>
            <img src={`./img/clients/PDO${isHovering == 2 ? 2 : 1}.png`} alt="" />
          </div>
          <div onMouseOver={() => setIsHovering(3)} onMouseOut={() => setIsHovering(0)}>
            <img src={`./img/clients/VO${isHovering == 3 ? 2 : 1}.png`} alt="" />
          </div>
        </div>
        <br />
        <div className="grid-3">
          <div onMouseOver={() => setIsHovering(4)} onMouseOut={() => setIsHovering(0)}>
            <img src={`./img/clients/SVC${isHovering == 4 ? 2 : 1}.png`} alt="" />
          </div>
          <div onMouseOver={() => setIsHovering(5)} onMouseOut={() => setIsHovering(0)}>
            <img src={`./img/clients/CDO${isHovering == 5 ? 2 : 1}.png`} alt="" />
          </div>
          <div>
            <div className="flex">
              <div>
                <Player
                  className="img-fluid"
                  autoplay
                  loop
                  src="https://assets3.lottiefiles.com/packages/lf20_6pjojgtl.json"
                  background="transparent"
                  style={{ height: "200px", width: "200px" }}
                />
              </div>
              <div>
                <p><strong>5</strong> Proyectos activos</p>
                <p><strong>960 <span>Hrs</span></strong>Creando proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
