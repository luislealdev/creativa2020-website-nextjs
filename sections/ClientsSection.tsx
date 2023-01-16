import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';

export const Clients = () => {
  return (
    <section id="clients" className="w3-center">
      <div className="container" data-aos="zoom-out">
        <h3><strong>PROYECTOS ACTUALES</strong></h3>
        <div className="grid-3">
          <div>
            <img src="./img/aboutUs/mafer.jpeg" alt="" />
          </div>
          <div>
            <img src="./img/aboutUs/mafer.jpeg" alt="" />
          </div>
          <div>
            <img src="./img/aboutUs/mafer.jpeg" alt="" />
          </div>
        </div>
        <br />
        <div className="grid-3">
          <div>
            <img src="./img/aboutUs/mafer.jpeg" alt="" />
          </div>
          <div>
            <img src="./img/aboutUs/mafer.jpeg" alt="" />
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
