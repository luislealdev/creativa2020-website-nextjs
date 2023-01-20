import { useState } from "react";


export const PackagesSection = () => {

  const servicios_junior: string[] = ['Servicios individuales', 'Branding', 'Visual Merchandising', 'Pauta publicitaria', 'Diseño de elementos publicitarios (Volantes)', 'Fotografía de producto']
  const servicios_senior: { title: string, description: string }[] = [{ title: 'SEM', description: 'Publicidad de Google Ads' }, { title: 'Sitio Web', description: 'One page/Multipage' }, { title: 'Aplicaciones web', description: 'E-commerce/Formularios de satisfacción y admin panel' }, { title: 'SEO', description: 'Posiciona tu marca a traves de los mejores motores de búsqueda' }]

  const [principal, setPrincipal] = useState(1);

  return (
    <section id="services" className="">
      <div className="container" data-aos="fade-up">

        {
          principal != 2 && <button onClick={() => setPrincipal(principal + 1)} className="btn hi-prev">
            {`<`}
          </button>
        }

        {
          principal != 0 && <button onClick={() => setPrincipal(principal - 1)} className="btn hi-next">
            {`>`}
          </button>
        }

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
                      <div className="w3-center">
                        <h2>ESTRATEGIA</h2>
                        <h2>SOCIAL MEDIA</h2>
                        <h2>COMMUNITY MANAGER</h2>
                      </div>
                    </div>
                    <div>
                      <div className="w3-center">
                        <h2>ESTRATEGIA</h2>
                        <h2>SOCIAL MEDIA</h2>
                        <h2>COMMUNITY MANAGER</h2>
                        <h2>BRANDING</h2>
                      </div>
                    </div>
                    <div>
                      <div className="w3-center">
                        <h2>ESTRATEGIA</h2>
                        <h2>SOCIAL MEDIA</h2>
                        <h2>COMMUNITY MANAGER</h2>
                        <h2>BRANDING</h2>
                        <h2>CAPACITACIÓN</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="side not-active">
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
                  <div className="active services not-active">
                    <h1>NUESTROS KITS</h1>
                    <div className="info">
                      <div>
                        <div className="w3-center">
                          <h2>ESTRATEGIA</h2>
                          <h2>SOCIAL MEDIA</h2>
                          <h2>COMMUNITY MANAGER</h2>
                        </div>
                      </div>
                      <div>
                        <div className="w3-center">
                          <h2>ESTRATEGIA</h2>
                          <h2>SOCIAL MEDIA</h2>
                          <h2>COMMUNITY MANAGER</h2>
                          <h2>BRANDING</h2>
                        </div>
                      </div>
                      <div>
                        <div className="w3-center">
                          <h2>ESTRATEGIA</h2>
                          <h2>SOCIAL MEDIA</h2>
                          <h2>COMMUNITY MANAGER</h2>
                          <h2>BRANDING</h2>
                          <h2>CAPACITACIÓN</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="side ">
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

                  <div className="side not-active">
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

                  <div className="side ">
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

                  <div className="active services not-active">
                    <h1>NUESTROS KITS</h1>
                    <div className="info">
                      <div>
                        <div className="w3-center">
                          <h2>ESTRATEGIA</h2>
                          <h2>SOCIAL MEDIA</h2>
                          <h2>COMMUNITY MANAGER</h2>
                        </div>
                      </div>
                      <div>
                        <div className="w3-center">
                          <h2>ESTRATEGIA</h2>
                          <h2>SOCIAL MEDIA</h2>
                          <h2>COMMUNITY MANAGER</h2>
                          <h2>BRANDING</h2>
                        </div>
                      </div>
                      <div>
                        <div className="w3-center">
                          <h2>ESTRATEGIA</h2>
                          <h2>SOCIAL MEDIA</h2>
                          <h2>COMMUNITY MANAGER</h2>
                          <h2>BRANDING</h2>
                          <h2>CAPACITACIÓN</h2>
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
