import { useState } from "react";


export const PackagesSection = () => {

  const servicios_junior: string[] = ['Servicios individuales', 'Branding', 'Visual Merchandising', 'Pauta publicitaria', 'Diseño de elementos publicitarios (Volantes)']
  const servicios_senior: { title: string, description: string }[] = [{ title: 'SEM', description: 'Publicidad de Google Ads' }, { title: 'Sitio Web', description: 'One page/Multipage' }, { title: 'Aplicaciones web', description: 'E-commerce/Formularios de satisfacción y admin panel' }, { title: 'SEO', description: 'Posiciona tu marca a traves de los mejores motores de búsqueda' }]

  const [principal, setPrincipal] = useState(1);

  return (
    <section id="services" className="">
      <div className="container" data-aos="fade-up">
        <button>
          { }
        </button>
        <div className="grid-3">

          {
            principal == 1 ?
              <>
                <div className="side not-active">
                  <h3>SERVICIOS JUNIOR</h3>
                  <div className="info w3-center">
                    {servicios_junior.map(text => (
                      <div>
                        <h2>
                          {text}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="active services">
                  <h1>NUESTROS KITS</h1>
                  <div className="info">
                    <div>
                      <img src="/img/icons/one.gif" alt="" />
                      <div className="w3-center">
                        <ul>
                          <li>
                            Estrategia
                          </li>
                          <li>
                            Social Media
                          </li>
                          <li>
                            Community Manager
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <img src="/img/icons/two.gif" alt="" />
                      <div className="w3-center">
                        <ul>
                          <li>
                            Estrategia
                          </li>
                          <li>
                            Social Media
                          </li>
                          <li>
                            Community Manager
                          </li>
                          <li>Branding</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <img src="/img/icons/three.gif" alt="" />
                      <div className="w3-center">
                        <ul>
                          <li>
                            Estrategia
                          </li>
                          <li>
                            Social Media
                          </li>
                          <li>
                            Community Manager
                          </li>
                          <li>Branding</li>
                          <li>Capacitación</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="side  not-active">
                  <h3>SERVICIOS SENIOR</h3>
                  <div className="info w3-center">
                    {servicios_senior.map(service => (
                      <div>
                        <h2>
                          {service.title}
                        </h2>
                        <p>{service.description} </p>
                      </div>
                    ))}
                  </div>
                </div>
              </> :
              principal == 2 ?
                <>
                  <div className="active services">
                    <h1>NUESTROS SERVICIOS</h1>
                    <div className="info">
                      <div>
                        <img src="/img/icons/one.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Email Marketing
                          </h2>
                        </div>
                      </div>
                      <div>
                        <img src="/img/icons/two.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Call Center
                          </h2>
                        </div>
                      </div>
                      <div>
                        <img src="/img/icons/three.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Community Manager
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="side">
                    <h3>CREATIVA 1</h3>
                    <div className="info w3-center">
                      {servicios_junior.map(text => (
                        <div>
                          <h2>
                            {text}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="side">
                    <h3>CREATIVA 2</h3>
                    <div className="info">
                      {servicios_senior.map(service => (
                        <div>
                          <h2>
                            {service.title}
                          </h2>
                          <p>{service.description} </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </> :
                <>
                  <div className="side">
                    <h3>CREATIVA 1</h3>
                    <div className="info w3-center">
                      {servicios_junior.map(text => (
                        <div>
                          <h2>
                            {text}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="side">
                    <h3>CREATIVA 2</h3>
                    <div className="info w3-center">
                      {servicios_senior.map(service => (
                        <div>
                          <h2>
                            {service.title}
                          </h2>
                          <p>{service.description} </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="active">
                    <h1>NUESTROS SERVICIOS</h1>
                    <div className="info">
                      <div>
                        <img src="/img/icons/list.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Google Ads
                          </h2>
                        </div>
                      </div>
                      <div>
                        <img src="/img/icons/like.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Social Media
                          </h2>
                        </div>
                      </div>
                      <div>
                        <img src="/img/icons/email.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Email Marketing
                          </h2>
                        </div>
                      </div>
                      <div>
                        <img src="/img/icons/telephone.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Call Center
                          </h2>
                        </div>
                      </div>
                      <div>
                        <img src="/img/icons/speech-bubble.gif" alt="" />
                        <div className="w3-center">
                          <h2>
                            Community Manager
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
          }

        </div>
      </div>
    </section>
  );
};
