import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

export const PrincipalSection = () => {

  return (
    <>
    <section className="grid-20-80" id="home-section">
      <div className="center-elements">
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_6pjojgtl.json"
          background="transparent"
          style={{ height: "400px", width: "240px" }}
        />
      </div>

      <div>
        <div className="w3-center margin-30px">
          <h2> <span style={{backgroundColor:'#FFF500', fontSize: '30px'}}>Creativa2020 </span> - Agencia de marketing <span>especializada en el sector óptico </span> que busca entender y atender perfectamente la visión de tu negocio.</h2>
        </div>
        <div className="grid-8-gallery margin-30px">
          <div><Image src='/img/aboutUs/mafer.jpeg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
          <div><Image src='/img/aboutUs/mariam.jpg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
          <div><Image src='/img/aboutUs/mafer.jpeg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
          <div><Image src='/img/aboutUs/mariam.jpg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
          <div><Image src='/img/aboutUs/mafer.jpeg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
          <div><Image src='/img/aboutUs/mariam.jpg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
          <div><Image src='/img/aboutUs/mafer.jpeg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
          <div><Image src='/img/aboutUs/mariam.jpg' width={100} height={100} alt='CREATIVA 202O Galeria' /></div>
        </div>
      </div>
    </section>
    </>
  )
};
