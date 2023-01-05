import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
// import { startOpeningNavbar, toggleShowingMobileNavbar } from "../store/ui";

export const PrincipalSection = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section id="hero" className="hero">
      <div className="container position-relative  ">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>
              Cambia la <span>Visión</span>
            </h2>
            <p>
              Agencia de marketing especializada en el sector óptico y salud
              visual.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started">
                Conocer más
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <Player
              className="img-fluid"
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_5Mq5vRxVlQ.json"
              background="transparent"
              style={{ height: "300px", width: "500px" }}
            />
          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div
              className="col-xl-3 col-md-6 upWhenHover"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box bg-color-pink" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="icon">
                  <i className="fa-regular fa-comments"></i>
                </div>
                <h4 className="title stretched-link">Diagnóstico 360</h4>
                {/* TODO: Cambiar color de texto y que los demás elementos no se hagan grandes en el hover */}
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 upWhenHover"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box bg-color-blue">
                <div className="icon">
                  <i className="bi bi-gem"></i>
                </div>
                <h4 className="title stretched-link">
                  Entendemos tu misión y visión
                </h4>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 upWhenHover"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box bg-color-pink ">
                <div className="icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="title stretched-link">
                  Fijamos los objetivos y los cumplimos
                </h4>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 upWhenHover"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon-box bg-color-blue">
                <div className="icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <h4 className="title stretched-link">
                  Utilizamos herramientas digitales
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
