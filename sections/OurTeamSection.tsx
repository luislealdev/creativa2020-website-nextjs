import React from "react";

export const OurTeamSection = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Nuestro equipo</h2>
          <p>Preparados para servirte</p>
        </div>

        <div className="row gy-4">
          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="member">
              <img
                src="/img/team/Dani.png"
                className="img-fluid"
                alt="Community Manager"
              />
              <h4>Dani Martinez</h4>
              <span>Community Manager</span>
              <div className="social"></div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="member">
              <img
                src="/img/team/Xryzw.png"
                className="img-fluid"
                alt="Mercadologa"
              />
              <h4>Xryzw Mendez</h4>
              <span>Marketer</span>
              <div className="social"></div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member">
              <img
                src="/img/team/Luis.png"
                className="img-fluid"
                alt="programador"
              />
              <h4>Luis Leal</h4>
              <span>Technology Manager</span>
              <div className="social"></div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member">
              <img
                src="/img/team/Cams.png"
                className="img-fluid"
                alt="programador"
              />
              <h4>Camila Martínez</h4>
              <span>Desing</span>
              <div className="social"></div>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="member">
              <img
                src="/img/team/Alexis.png"
                className="img-fluid"
                alt="programador"
              />
              <h4>Alexis Medina</h4>
              <span>Desing</span>
              <div className="social"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
