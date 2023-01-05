import React from "react";

export const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="/img/clients/cursosOptometriaLogo.png"
                className="img-fluid"
                alt="visual center celaya"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/img/clients/vistaOpticaLogo.png"
                className="img-fluid"
                alt="cursos de optometria"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/img/clients/visualCenterLogo.png"
                className="img-fluid"
                alt="vista optica"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/img/clients/saludVisualCenter.png"
                className="img-fluid"
                alt="visual center celaya"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/img/clients/proveedora.png"
                className="img-fluid"
                alt="visual center celaya"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
