import React from "react";

export const PackagesSection = () => {
  return (
    <section id="pricing" className="pricing sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Paquetes creativos</h2>
          <p>
            No te quedes solo con servicios individuales, revisa nuestros
            paquetes creativos
          </p>
        </div>

        <div
          className="row g-4 py-lg-5"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Estrategia + Social Media + Community Manager </h3>
              <div className="icon">
                <i className="fa-solid fa-star"></i>
              </div>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Configuración de cuenta
                  publicitaria
                </li>
                <li>
                  <i className="bi bi-check"></i> Análisis de competidores
                </li>
                <li>
                  <i className="bi bi-check"></i> Planeación y Desarrollo de
                  Campaña
                </li>
                <li>
                  <i className="bi bi-check"></i> Ejecución de Pauta
                </li>
                <li>
                  <i className="bi bi-check"></i> Creación de gráficos Digitales
                </li>
                <li>
                  <i className="bi bi-check"></i> Respuesta y seguimiento de
                  campañas
                </li>
                <li>
                  <i className="bi bi-check"></i> Reporte de Resultados
                </li>
                <li>
                  <i className="bi bi-check"></i> 12 post mensuales
                </li>
                {/* <li className="na">
                  <i className="bi bi-x"></i>{" "}
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li className="na">
                  <i className="bi bi-x"></i>{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li> */}
              </ul>
              {/* <div className="text-center">
                <a href="#" className="buy-btn">
                  Buy Now
                </a>
              </div> */}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item featured">
              <h3>Estrategia + Social Media + Community Manager + Branding </h3>
              <div className="icon">
                <i className="fa-solid fa-plus"></i>
              </div>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Configuración de cuenta
                  publicitaria
                </li>
                <li>
                  <i className="bi bi-check"></i> Análisis de competidores
                </li>
                <li>
                  <i className="bi bi-check"></i> Planeación y Desarrollo de
                  Campaña
                </li>
                <li>
                  <i className="bi bi-check"></i> Ejecución de Pauta
                </li>
                <li>
                  <i className="bi bi-check"></i> Creación de gráficos Digitales
                </li>
                <li>
                  <i className="bi bi-check"></i> Respuesta y seguimiento de
                  campañas
                </li>
                <li>
                  <i className="bi bi-check"></i> Reporte de Resultados
                </li>
                <li>
                  <i className="bi bi-check"></i> 18 post mensuales
                </li>
                <li>
                  <i className="bi bi-check"></i> Logo responsivo
                </li>
                <li>
                  <i className="bi bi-check"></i> Diseño de foto de perfil y
                  portada para redes sociales
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>
                Estrategia + Social Media + Community Manager + Branding +
                Capacitación
              </h3>
              <div className="icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <ul>
                <li>
                  <i className="bi bi-check"></i> Configuración de cuenta
                  publicitaria
                </li>
                <li>
                  <i className="bi bi-check"></i> Análisis de competidores
                </li>
                <li>
                  <i className="bi bi-check"></i> Planeación y Desarrollo de
                  Campaña
                </li>
                <li>
                  <i className="bi bi-check"></i> Ejecución de Pauta
                </li>
                <li>
                  <i className="bi bi-check"></i> Creación de gráficos Digitales
                </li>
                <li>
                  <i className="bi bi-check"></i> Respuesta y seguimiento de
                  campañas
                </li>
                <li>
                  <i className="bi bi-check"></i> Reporte de Resultados
                </li>
                <li>
                  <i className="bi bi-check"></i> 18 post mensuales
                </li>
                <li>
                  <i className="bi bi-check"></i> Logo responsivo
                </li>
                <li>
                  <i className="bi bi-check"></i> Diseño de foto de perfil y
                  portada para redes sociales
                </li>
                <li>
                  <i className="bi bi-check"></i> Volantes/Tarjeta de
                  presentación
                </li>
                <li>
                  <i className="bi bi-check"></i> Curso de capacitación
                  <ul>
                    <li>
                      <i className="bi bi-check"></i> Experiencias WOW
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Ventas
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
