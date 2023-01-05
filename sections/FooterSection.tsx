import React from "react";
import NextLink from "next/link";
const home = "home"
const home2 = "home"
export const FooterSection = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>Creativa2020</span>
            </a>
            <p>Agencia de marketing especializada en el sector óptico..</p>
            <div className="social-links d-flex mt-4">
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Links comunes</h4>
            <ul>
              <li>

                <NextLink href={home === home2 ? "/#" : "/"}>Inicio</NextLink>
              </li>
              <li>
                <a href="#about">Sobre nosotros</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Nuestros servicios</h4>
            <ul>
              <li>Community Managment</li>
              <li>Posicionamiento SEO</li>
              <li>CRM</li>
              <li>Diseño web</li>
              <li>Branding y digitalización de marca</li>
              <li>Mistery Shopper</li>
              <li>Estudios de mercado</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contáctanos</h4>

            <p>Guanajuato, México</p>
            <p>
              <strong>Teléfono:</strong> 461 299 7383
              <br />
              <strong>Correo:</strong> contacto@creativa2020.com
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Creativa2020</span>
          </strong>
          . Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};
