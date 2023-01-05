import React from "react";

export const PortFolioSection = () => {
  return (
    <section id="portfolio" className="portfolio sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Proyectos creativos</h2>
          <p>Conoce nuestros mejores proyectos</p>
        </div>

        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-4 portfolio-container">
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <a
                  href="/img/portfolio/cursosDeOptometria.png"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="/img/portfolio/cursosDeOptometria.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Cursos de optometría by Rod Castañeda
                    </a>
                  </h4>
                  <p>
                    Ayudando a ser mejores seres humanos en el sector óptico.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <a
                  href="/img/portfolio/visualCenter.png"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox"
                >
                  <img
                    src="/img/portfolio/visualCenter.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <div className="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details">
                      Visual Center
                    </a>
                  </h4>
                  <p>
                    Porque entendemos la importancia de tener una vista
                    funcionando al 100% preparada para el día a día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
