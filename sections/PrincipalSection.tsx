import { Player } from "@lottiefiles/react-lottie-player";
import { Onda } from '../components/Onda';

export const PrincipalSection = () => {

  return (
    <>
      <section className="grid-15-70-15" id="home-section">
        <div className="lateral-1">
          <Onda />
        </div>
        <div className="info">
          <h2>¡HOLA!</h2>
          <h4>NO SOLO CREAMOS PRESENCIA DIGITAL</h4>
          <h5>NOS ENFOCAMOS EN FORTALECER TODOS TUS PROCESOS</h5>
          <hr style={{ color: '#F9F038' }} />
          <hr style={{ color: '#C60185' }} />
          <hr style={{ color: '#81E6FD' }} />
          <h6>Somos la primer <strong>Agencia de Marketing 360 </strong> para Ópticas en México</h6>
          <Player
            className="img-fluid"
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_tcwozhzv/MarketingCampaignsViralMethods.json"
            background="transparent"
            style={{ height: "400px", width: "500px" }}
          />
        </div>
        <div className="lateral-2">
        <Onda />
          <div>

          </div>
        </div>
      </section>
    </>
  )
};
