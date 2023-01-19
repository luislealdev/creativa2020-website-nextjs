import { useState } from 'react';

export const PackagesSection = () => {

  const creativa1: string[] = ['Configuración de cuenta publicitaria', 'Análisis de competidores', 'Planeación y desarrollo de campaña', 'Ejecución de pautas', 'Elaboración de gráficos digitales', 'Respuesta y seguimiento de campañas', 'Reporte de resultados mensuales', '18 posts mensuales', 'Logo responsivo', 'Branding de redes sociales']
  const creativa2: string[] = ['Configuración de cuenta publicitaria', 'Análisis de competidores', 'Planeación y desarrollo de campaña', 'Ejecución de pautas', 'Elaboración de gráficos digitales', 'Respuesta y seguimiento de campañas', 'Reporte de resultados mensuales', '12 posts mensuales']

  const [principal, setPrincipal] = useState(1);

  return (
    <section id="services" className="">
      <div className="container" data-aos="fade-up">
        <button>
          {}
        </button>
        <div className="grid-3">

          {
            principal == 1 ?
              <>
                  <div className="side not-active">
                  <h3>CREATIVA 1</h3>
                  <div className="info w3-center">
                    {creativa1.map(text => (
                      <div>
                        <h2>
                          {text}
                        </h2>
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

                <div className="side  not-active">
                  <h3>CREATIVA 2</h3>
                  <div className="info w3-center">
                    {creativa2.map(text => (
                      <div>
                        <h2>
                          {text}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </> :
              principal == 2 ?
                <>
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

                  <div className="side">
                    <h3>CREATIVA 1</h3>
                    <div className="info w3-center">
                      {creativa1.map(text => (
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
                      {creativa2.map(text => (
                        <div>
                          <h2>
                            {text}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                </> :
                <>
                  <div className="side">
                    <h3>CREATIVA 1</h3>
                    <div className="info w3-center">
                      {creativa1.map(text => (
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
                      {creativa2.map(text => (
                        <div>
                          <h2>
                            {text}
                          </h2>
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
