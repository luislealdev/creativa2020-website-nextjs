import React from "react";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonios</h2>
          <p>No nos creas a nosotros, creéle a nuestros clientes.</p>
        </div>

        <div
          className="slides-3 swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/testimonials/rodCastañeda.png"
                      className="testimonial-img flex-shrink-0"
                      alt="testimonios creativa2020"
                    />
                    <div>
                      <h3>Rod Castañeda</h3>
                      <h4>Fundador de Cursos de optometría</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    "Hemos hecho sinergia porque lo más importante de la agencia
                    es que conocen mi mercado."
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/testimonials/proveedora.png"
                      className="testimonial-img flex-shrink-0"
                      alt="testimonios marketing"
                    />
                    <div>
                      <h3>Proveedora de óptica</h3>
                      <h4>Proveedora de lentes y accesorios</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    "Me encantan los diseños bonitos y todavía más cuando son
                    puntuales"
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/testimonials/visualCenter.png"
                      className="testimonial-img flex-shrink-0"
                      alt="agencia de marketing"
                    />
                    <div>
                      <h3>Visual Center</h3>
                      <h4>Óptica</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    "Han vestido la cuenta de Instagram y Facebook tanto como el
                    sitio web de una forma que me gusta pero que sobre todo le
                    gusta a mis clientes y a los nuevos visitantes de las
                    redes."
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/testimonials/saludVisualCenter.png"
                      className="testimonial-img flex-shrink-0"
                      alt="creativa2020"
                    />
                    <div>
                      <h3>Salud Visual Center</h3>
                      <h4>Óptica</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    "Rediseñaron mi imagen y ahora la empresa es más atractiva
                    para los clientes, ¡gracias!"
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/testimonials/vistaOpticaLogo.png"
                      className="testimonial-img flex-shrink-0"
                      alt="mejor agencia de marketing en celaya"
                    />
                    <div>
                      <h3>Vista Óptica</h3>
                      <h4>Óptica</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    "Conocen del sector, sobre defectos visuales, equipos y ese
                    conocimiento ayuda a que pueda transmitir mis cursos,
                    talleres y certificaciones."
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};
