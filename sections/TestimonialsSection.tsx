export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <h2><strong>¿QUÉ PIENSAN NUESTROS CLIENTES?</strong></h2>
        <div className="grid-3">
          <div className="grid-v-2">
            <div>
              <h6>Cursos de optometría</h6>
              <p>By Rod Castañeda</p>
              <img src="./img/testimonials/cursosDeOptometria.png" alt="Cursos de optometría" />
              <p>"Conocen del sector, sobre defectos visuales,
                equipos; y ese conocimiento ayuda a que pueda
                transmitir mis cursos, talleres y certificaciones"</p>
            </div>
            <div>
              <h6>Salud Visual</h6>
              <p>Ópticas</p>
              <img src="./img/testimonials/saludVisualCenter.png" alt="Salud Visual Center" />
              <p>"Rediseñaron mi imagen y ahora la empresa
                es más atractiva para los clientes, ¡gracias!".</p>
            </div>
          </div>
          <div className="grid-v-2">
            <div>
              <h6>Proveedora de Óptica</h6>
              <p>Proveedora de lentes</p>
              <img src="./img/testimonials/proveedora.png" alt="Proveedora de óptica" />
              <p>"Me encantan los diseños bonitos
                y todavía más cuando son puntuales".</p>
            </div>
            <div>
              <h6>Vista Óptica</h6>
              <p>Óptica</p>
              <img src="./img/testimonials/vistaoptica.png" alt="Vista óptica" />
              <p>"Hemos hecho sinergia porque lo más importante de la agencia es que conocen mi mercado".
              </p>
            </div>
          </div>

          <div className="only-one">
            <h6>Visual Center</h6>
            <p>Ópticas</p>
            <img src="./img/testimonials/visualCenter.png" alt="Visual Center" />
            <p>"Han vestido la cuenta de Instagram y Facebook
              tanto como el sitio web de una forma
              que me gusta pero que sobre todo le
              gusta a mis clientes y a los nuevos visitantes
              de las redes"</p>
          </div>

        </div>
      </div>
    </section>
  );
};
