import React from "react";

export const TopBar = () => {
  return (
    <section id="topbar" className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">contacto@creativa2020.com</a>
          </i>
        </div>

        <div className="social-links d-none d-md-flex align-items-center">

          <a
            href="https://www.facebook.com/Creativa-2020-109887805156958"
            className="facebook"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://instagram.com/creativa2020_agencia?igshid=YmMyMTA2M2Y="
            className="instagram"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
