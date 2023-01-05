import React from "react";

export const AboutUsSection = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Sobre nosotros</h2>
          <p>
            Somos una agencia de marketing especializada en el sector óptico que
            busca entender perfectamente la visión de tu negocio.
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>¿No encontraste una agencia que entendiera tu visión?</h3>
            <img
              src="/img/aboutUs/mariam.jpg"
              className="img-fluid rounded-4 mb-4"
              alt="marketing"
            />
            <p>
              Creativa2020 es la primera agencia de marketing especializada en
              salud visual y ópticas en todo el país. Ante la necesidad de crear
              más que solo posts, creamos una formula única que entiende el
              sector.
            </p>
            <p>Conoce nuestra fórmula exclusiva por cliente</p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">Conoce nuestros objetivos</p>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill color-blue"></i>{" "}
                  Entender la visión y misión del cliente.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill color-pink"></i> Crear
                  una propuesta 360 que abarque desde el marketing tradicional
                  hasta lo más nuevo en tecnologías.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill color-yellow"></i>{" "}
                  Fidelizar a los clientes, que cada usuario regrese y te
                  recomiende.
                </li>
              </ul>
              <p>
                Contamos con especialistas en cada una de nuestras áreas de
                diseño gráfico, marketing, identidad visual, programación,
                social media y publicidad.
              </p>

              <div className="position-relative mt-4">
                <img
                  src="/img/aboutUs/mafer.jpeg"
                  className="img-fluid rounded-4"
                  alt="sobre creativa2020"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
