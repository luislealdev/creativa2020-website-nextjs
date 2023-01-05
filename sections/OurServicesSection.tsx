import React, { useState } from "react";

export const OurServicesSection = () => {
  const [hoverId, setHoverId] = useState(null);

  const handleMouseOver = (id) => {
    setHoverId(id);
  };

  const handleMouseOut = () => {
    setHoverId(null);
  };

  return (
    <section id="services" className="services sections-bg">
      <div className="section-header">
        <h2>Nuestros servicios</h2>
        <p>Todo lo que necesitas para tu óptica a tu alcance</p>
      </div>

      <div className="container grid-3" data-aos="fade-up">
        <div className="margin-10px">
          <h5 className="text-center">Marketing</h5>

          <div
            className="service-item"
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={handleMouseOut}
          >
            <div className="grid-2 ">
              <div>
                <div className="icon">
                  <i className="fa-solid fa-person"></i>
                </div>
              </div>
              <div>
                <h3>Social Media </h3>
              </div>
            </div>

            {hoverId == 1 && (
              <p>
                Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                est mollit excepteur consectetur enim culpa voluptate nulla.
              </p>
            )}
          </div>

          <div
            className="service-item"
            onMouseOver={() => handleMouseOver(2)}
            onMouseOut={handleMouseOut}
          >
            <div className="grid-2 ">
              <div>
                <div className="icon">
                  <i className="fa-solid fa-hashtag"></i>
                </div>
              </div>
              <div>
                <h3>Google Ads </h3>
              </div>
            </div>

            {hoverId == 2 && (
              <p>
                Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                est mollit excepteur consectetur enim culpa voluptate nulla.
              </p>
            )}
          </div>

          <div
            className="service-item"
            onMouseOver={() => handleMouseOver(3)}
            onMouseOut={handleMouseOut}
          >
            <div className="grid-2 ">
              <div>
                <div className="icon">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              <div>
                <h3>Community Manager </h3>
              </div>
            </div>

            {hoverId == 3 && (
              <p>
                Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                est mollit excepteur consectetur enim culpa voluptate nulla.
              </p>
            )}
          </div>

          <div
            className="service-item"
            onMouseOver={() => handleMouseOver(5)}
            onMouseOut={handleMouseOut}
          >
            <div className="grid-2 ">
              <div>
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
              <div>
                <h3>Email Marketing </h3>
              </div>
            </div>

            {hoverId == 5 && (
              <p>
                Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                est mollit excepteur consectetur enim culpa voluptate nulla.
              </p>
            )}
          </div>

          <div
            className="service-item"
            onMouseOver={() => handleMouseOver(6)}
            onMouseOut={handleMouseOut}
          >
            <div className="grid-2 ">
              <div>
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
              <div>
                <h3>Call Center </h3>
              </div>
            </div>

            {hoverId == 6 && (
              <p>
                Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                est mollit excepteur consectetur enim culpa voluptate nulla.
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="margin-10px">
            <h5 className="text-center">Tecnología</h5>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(7)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-solid fa-laptop"></i>
                  </div>
                </div>
                <div>
                  <h3>Sitios web </h3>
                </div>
              </div>

              {hoverId == 7 && (
                <p>
                  Sitios estáticos para mostrar un poco más sobre tu empresa,
                  cómo nació, dónde te pueden encontrar, tu catálogo y muchas
                  más cosas. Es un sitio informativo, puede ser onepage (una
                  sola página) o multipage (varias páginas).
                </p>
              )}
            </div>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(8)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-solid fa-computer"></i>
                  </div>
                </div>
                <div>
                  <h3>Apps web </h3>
                </div>
              </div>

              {hoverId == 8 && (
                <p>
                  Es un sitio web con interacción con el usuario, guarda
                  información que se puede visualizar por el administrador, un
                  ejemplo de este son formularios de satisfacción con admin
                  panel (Un lugar donde ves la información de la mejor manera
                  presentada), así como un sitio web que tu puedes modificar la
                  información sin tener que acceder al código directamente.
                </p>
              )}
            </div>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(9)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div>
                  <h3>E-commerce</h3>
                </div>
              </div>

              {hoverId == 9 && (
                <p>
                  Es una aplicación web que incluye pasarelas de pago para hacer
                  ventas en línea.
                </p>
              )}
            </div>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(10)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div>
                  <h3>Filtros de instagram </h3>
                </div>
              </div>

              {hoverId == 10 && (
                <p>
                  Creamos filtros para tu empresa, para que los usuarios puedan
                  conectar contigo de una manera poco tradicional… imagina que
                  se pueden probar tus lentes antes de comprarlos, desde su casa
                  y en cualquier parte del mundo. ¿Qué tal suena eso?
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="margin-10px">
            <h5 className="text-center">Otros</h5>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(11)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                </div>
                <div>
                  <h3>Branding </h3>
                </div>
              </div>

              {hoverId == 11 && (
                <p>
                  Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                  amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                  consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                  est mollit excepteur consectetur enim culpa voluptate nulla.
                </p>
              )}
            </div>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(12)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-solid fa-store"></i>
                  </div>
                </div>
                <div>
                  <h3>Visual Merchandising </h3>
                </div>
              </div>

              {hoverId == 12 && (
                <p>
                  Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                  amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                  consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                  est mollit excepteur consectetur enim culpa voluptate nulla.
                </p>
              )}
            </div>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(13)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-solid fa-camera"></i>
                  </div>
                </div>
                <div>
                  <h3>Fotografía de producto </h3>
                </div>
              </div>

              {hoverId == 13 && (
                <p>
                  Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                  amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                  consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                  est mollit excepteur consectetur enim culpa voluptate nulla.
                </p>
              )}
            </div>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(14)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-solid fa-glasses"></i>
                  </div>
                </div>
                <div>
                  <h3>Fotografía por temporada </h3>
                </div>
              </div>

              {hoverId == 14 && (
                <p>
                  Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                  amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                  consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                  est mollit excepteur consectetur enim culpa voluptate nulla.
                </p>
              )}
            </div>

            <div
              className="service-item"
              onMouseOver={() => handleMouseOver(15)}
              onMouseOut={handleMouseOut}
            >
              <div className="grid-2 ">
                <div>
                  <div className="icon">
                    <i className="fa-solid fa-pen-nib"></i>
                  </div>
                </div>
                <div>
                  <h3>Diseño de volantes </h3>
                </div>
              </div>

              {hoverId == 15 && (
                <p>
                  Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
                  amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
                  consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
                  est mollit excepteur consectetur enim culpa voluptate nulla.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
