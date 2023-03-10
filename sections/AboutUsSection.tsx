import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';

export const AboutUsSection = () => {
  return (
    <section id="about" className="w3-center">
      <div className="container" data-aos="fade-up">
        <h2><strong>¿QUIÉNES</strong> SOMOS?</h2>

        <h3><strong>¿No has encontrado una agencia que entienda tu visión?</strong></h3>
        <p><strong>Creativa2020 es la primera agencia de marketing especializada en
          salud visual y ópticas en todo el país.</strong>
          <br />
          Ante la necesidad de crear más que solo posts, hemos creado una fórmula única que entiende el sector.
          <br /> <br />
          Contamos con especialistas en cada una de nuestras áreas: <br />
          <strong className="italic">Diseño gráfico, marketing, identidad visual, programación, social media y publicidad.</strong>
        </p>
        <br /><br /><br /><br />
        <h3><strong>NUESTROS OBJETIVOS</strong></h3>

          <div>
            <div className="objetivo">
            <Player
            className="img-fluid"
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_ogo6spj8.json"
            background="transparent"
          />
              <p><strong>Entender</strong> la visión y misión del cliente.</p>
            </div>
            <div className="objetivo">
            <Player
            className="img-fluid"
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_ubislr3l.json"
            background="transparent"
          />
              <p><strong>Crear una propuesta 360°</strong>, cubriendo así desde el marketing tradicional, hasta lo más nuevo en tecnologías.</p>
            </div>
            <div className="objetivo">
            <Player
            className="img-fluid"
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_r8nsnfit.json"
            background="transparent"
          />
          
              <p><strong>Fortalecer </strong>capacitación, estrategia y estructura interna.</p>
            </div>
          </div>
        </div>
    </section>
  );
};
