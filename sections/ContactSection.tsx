import { send } from "emailjs-com";
import { FC } from "react";
import Swal from "sweetalert2";
import { useForm } from "../hooks";


const formData = {
  nombre: "",
  telefono: "",
  numSucursales: "",
  numEmpleados: "",
  email: "",
  hanTrabajadoAntesConAgencia: "",
  inversionMensual: "",
  enlaceDeRedesSociales: ""
};

interface formData {

  nombre?: string,
  telefono?: string,
  numSucursales?: string,
  numEmpleados?: string,
  email?: string,
  hanTrabajadoAntesConAgencia?: string,
  inversionMensual?: string,
  enlaceDeRedesSociales?: string
}

export const ContactSection: FC = () => {
  const { formState, onInputChange, onResetForm } = useForm(formData);
  const {
    nombre,
    telefono,
    numSucursales,
    numEmpleados,
    email,
    hanTrabajadoAntesConAgencia,
    inversionMensual,
    enlaceDeRedesSociales
  }: formData = formState;

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    send("id1", "default", formState, "WllcpADNcflscCJRW")
      .then((response) => {
        Swal.fire(
          "El mensaje se ha enviado!",
          "Nos comunicaremos pronto contigo!",
          "success"
        );
        onResetForm();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal!",
          footer: "Intenta de nuevo más tarde",
        });
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contacto</h2>
          <p>Conéctate con nosotros para empezar tu historia de éxito</p>
        </div>

        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Ubicación:</h4>
                  <p>Guanajuato, México.</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>creativa2020a@gmail.com</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Horarios:</h4>
                  <p>Lunes-Viernes: 9AM - 5PM</p>
                  <p>Sábados: 10AM - 1PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              action="/"
              method="POST"
              className="php-email-form"
              onSubmit={onSubmit}
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    placeholder="Nombre de la óptica"
                    required
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="telefono"
                    value={telefono}
                    onChange={onInputChange}
                    placeholder="Número de contacto"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    autoComplete="off"
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    placeholder="Correo electrónico"
                    required
                  />
                </div>
                <div className="col-md-3 form-group">
                  <input
                    autoComplete="off"
                    type="text"
                    name="numSucursales"
                    value={numSucursales}
                    onChange={onInputChange}
                    className="form-control"
                    placeholder="Número de sucursales"
                    required
                  />
                </div>
                <div className="col-md-3 form-group mt-3 mt-md-0">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="numEmpleados"
                    value={numEmpleados}
                    onChange={onInputChange}
                    placeholder="Número de empleados"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="hanTrabajadoAntesConAgencia"
                    value={hanTrabajadoAntesConAgencia}
                    onChange={onInputChange}
                    placeholder="¿Han trabajado anteriormente con una agencia? (SI/NO)"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="enlaceDeRedesSociales"
                    value={enlaceDeRedesSociales}
                    onChange={onInputChange}
                    placeholder="Enlace de tus redes sociales"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="inversionMensual"
                    value={inversionMensual}
                    onChange={onInputChange}
                    placeholder="Inversión mensual en redes/publicidad"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
