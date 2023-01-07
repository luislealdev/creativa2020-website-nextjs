// import React, { useState } from "react";

// export const OurServicesSection = () => {
//   const [hoverId, setHoverId] = useState(null);

//   const handleMouseOver = (id: number | React.SetStateAction<null>) => {
//     setHoverId(id);
//   };

//   const handleMouseOut = () => {
//     setHoverId(null);
//   };

//   return (
//     <section id="services" classNameName="services sections-bg">
//       <div classNameName="section-header">
//         <h2>Nuestros servicios</h2>
//         <p>Todo lo que necesitas para tu óptica a tu alcance</p>
//       </div>

//       <div classNameName="container grid-3" data-aos="fade-up">
//         <div classNameName="margin-10px">
//           <h5 classNameName="text-center">Marketing</h5>

//           <div
//             classNameName="service-item"
//             onMouseOver={() => handleMouseOver(1)}
//             onMouseOut={handleMouseOut}
//           >
//             <div classNameName="grid-2 ">
//               <div>
//                 <div classNameName="icon">
//                   <i classNameName="fa-solid fa-person"></i>
//                 </div>
//               </div>
//               <div>
//                 <h3>Social Media </h3>
//               </div>
//             </div>

//             {hoverId == 1 && (
//               <p>
//                 Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                 amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                 consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                 est mollit excepteur consectetur enim culpa voluptate nulla.
//               </p>
//             )}
//           </div>

//           <div
//             classNameName="service-item"
//             onMouseOver={() => handleMouseOver(2)}
//             onMouseOut={handleMouseOut}
//           >
//             <div classNameName="grid-2 ">
//               <div>
//                 <div classNameName="icon">
//                   <i classNameName="fa-solid fa-hashtag"></i>
//                 </div>
//               </div>
//               <div>
//                 <h3>Google Ads </h3>
//               </div>
//             </div>

//             {hoverId == 2 && (
//               <p>
//                 Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                 amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                 consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                 est mollit excepteur consectetur enim culpa voluptate nulla.
//               </p>
//             )}
//           </div>

//           <div
//             classNameName="service-item"
//             onMouseOver={() => handleMouseOver(3)}
//             onMouseOut={handleMouseOut}
//           >
//             <div classNameName="grid-2 ">
//               <div>
//                 <div classNameName="icon">
//                   <i classNameName="fa-solid fa-arrow-up"></i>
//                 </div>
//               </div>
//               <div>
//                 <h3>Community Manager </h3>
//               </div>
//             </div>

//             {hoverId == 3 && (
//               <p>
//                 Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                 amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                 consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                 est mollit excepteur consectetur enim culpa voluptate nulla.
//               </p>
//             )}
//           </div>

//           <div
//             classNameName="service-item"
//             onMouseOver={() => handleMouseOver(5)}
//             onMouseOut={handleMouseOut}
//           >
//             <div classNameName="grid-2 ">
//               <div>
//                 <div classNameName="icon">
//                   <i classNameName="fa-solid fa-envelope"></i>
//                 </div>
//               </div>
//               <div>
//                 <h3>Email Marketing </h3>
//               </div>
//             </div>

//             {hoverId == 5 && (
//               <p>
//                 Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                 amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                 consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                 est mollit excepteur consectetur enim culpa voluptate nulla.
//               </p>
//             )}
//           </div>

//           <div
//             classNameName="service-item"
//             onMouseOver={() => handleMouseOver(6)}
//             onMouseOut={handleMouseOut}
//           >
//             <div classNameName="grid-2 ">
//               <div>
//                 <div classNameName="icon">
//                   <i classNameName="fa-solid fa-phone"></i>
//                 </div>
//               </div>
//               <div>
//                 <h3>Call Center </h3>
//               </div>
//             </div>

//             {hoverId == 6 && (
//               <p>
//                 Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                 amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                 consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                 est mollit excepteur consectetur enim culpa voluptate nulla.
//               </p>
//             )}
//           </div>
//         </div>

//         <div>
//           <div classNameName="margin-10px">
//             <h5 classNameName="text-center">Tecnología</h5>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(7)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-solid fa-laptop"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Sitios web </h3>
//                 </div>
//               </div>

//               {hoverId == 7 && (
//                 <p>
//                   Sitios estáticos para mostrar un poco más sobre tu empresa,
//                   cómo nació, dónde te pueden encontrar, tu catálogo y muchas
//                   más cosas. Es un sitio informativo, puede ser onepage (una
//                   sola página) o multipage (varias páginas).
//                 </p>
//               )}
//             </div>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(8)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-solid fa-computer"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Apps web </h3>
//                 </div>
//               </div>

//               {hoverId == 8 && (
//                 <p>
//                   Es un sitio web con interacción con el usuario, guarda
//                   información que se puede visualizar por el administrador, un
//                   ejemplo de este son formularios de satisfacción con admin
//                   panel (Un lugar donde ves la información de la mejor manera
//                   presentada), así como un sitio web que tu puedes modificar la
//                   información sin tener que acceder al código directamente.
//                 </p>
//               )}
//             </div>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(9)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-brands fa-instagram"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>E-commerce</h3>
//                 </div>
//               </div>

//               {hoverId == 9 && (
//                 <p>
//                   Es una aplicación web que incluye pasarelas de pago para hacer
//                   ventas en línea.
//                 </p>
//               )}
//             </div>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(10)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-brands fa-instagram"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Filtros de instagram </h3>
//                 </div>
//               </div>

//               {hoverId == 10 && (
//                 <p>
//                   Creamos filtros para tu empresa, para que los usuarios puedan
//                   conectar contigo de una manera poco tradicional… imagina que
//                   se pueden probar tus lentes antes de comprarlos, desde su casa
//                   y en cualquier parte del mundo. ¿Qué tal suena eso?
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div>
//           <div classNameName="margin-10px">
//             <h5 classNameName="text-center">Otros</h5>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(11)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-solid fa-file-contract"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Branding </h3>
//                 </div>
//               </div>

//               {hoverId == 11 && (
//                 <p>
//                   Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                   amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                   consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                   est mollit excepteur consectetur enim culpa voluptate nulla.
//                 </p>
//               )}
//             </div>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(12)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-solid fa-store"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Visual Merchandising </h3>
//                 </div>
//               </div>

//               {hoverId == 12 && (
//                 <p>
//                   Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                   amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                   consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                   est mollit excepteur consectetur enim culpa voluptate nulla.
//                 </p>
//               )}
//             </div>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(13)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-solid fa-camera"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Fotografía de producto </h3>
//                 </div>
//               </div>

//               {hoverId == 13 && (
//                 <p>
//                   Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                   amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                   consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                   est mollit excepteur consectetur enim culpa voluptate nulla.
//                 </p>
//               )}
//             </div>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(14)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-solid fa-glasses"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Fotografía por temporada </h3>
//                 </div>
//               </div>

//               {hoverId == 14 && (
//                 <p>
//                   Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                   amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                   consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                   est mollit excepteur consectetur enim culpa voluptate nulla.
//                 </p>
//               )}
//             </div>

//             <div
//               classNameName="service-item"
//               onMouseOver={() => handleMouseOver(15)}
//               onMouseOut={handleMouseOut}
//             >
//               <div classNameName="grid-2 ">
//                 <div>
//                   <div classNameName="icon">
//                     <i classNameName="fa-solid fa-pen-nib"></i>
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Diseño de volantes </h3>
//                 </div>
//               </div>

//               {hoverId == 15 && (
//                 <p>
//                   Voluptate et Lorem adipisicing aliquip veniam ut voluptate id
//                   amet laboris anim et deserunt nostrud. Ea ad sit cillum labore
//                   consectetur voluptate sit enim sit magna. Dolor eiusmod sit in
//                   est mollit excepteur consectetur enim culpa voluptate nulla.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


export const OurServicesSection = () => {
  return (
    <div className="mb-4">
      <div className="section-header">
        <h2>Servicios </h2>
        <p>Todo lo que necesitas para tu óptica, a tu alcance.</p>
      </div>

      <div className='bodyServices grid-2 figures-bg'>
        <div className="">
          <h2>Marketing</h2>
          <ul>
            <li>Social Media</li>
            <li>Google Ads</li>
            <li>Community Manager</li>
            <li>Email Marketing</li>
            <li>Call Center</li>
          </ul>

        </div>

        <div className="sistema-solar">
          {/* <div className="linea-guia linea-guia-2"></div>
          <div className="linea-guia linea-guia-5"></div>
          <div className="linea-guia linea-guia-6"></div>
          <div className="linea-guia linea-guia-7"></div>
          <div className="linea-guia linea-guia-8"></div> */}

          <div className="content-social-media content-objeto" id="co5">
            <div className="social-media objeto" >
            </div>
          </div>

          <div className="content-google-ads content-objeto" id="co6">
            <div className="google-ads objeto" >
            </div>
          </div>

          <div className="content-email-marketing content-objeto" id="co7">
            <div className="email-marketing objeto" >
            </div>
          </div>

          <div className="content-call-center content-objeto" id="co8">
            <div className="call-center objeto" >
            </div>
          </div>

          <div className="content-community-manager content-objeto" id="co9">
            <div className="community-manager objeto" >
            </div>
          </div>

          <div className="content-pluton content-objeto" id="co10">
            <div className="pluton objeto">
            </div>
          </div>

          {/* <div className="content-pluton content-objeto" id="co10">
          <div className="pluton objeto" onclick="ap(10)">
          </div>
        </div> */}

        </div>


        {/* <div className="cards-container" id="ccp">

        <div className="card-sol content-card" id="cp1">
          <div className="img-planeta">
            <h2 className="title-planeta">Sol</h2>
          </div>
          <div className="info-sol info-planeta">
            <p>El Sol es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el
              centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema
              planetario.​</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/Sol" target="_blank">Leer mas</a>
            <div className="btn-planeta" onclick="ct(1)">cerrar</div>
          </div>
        </div>



        <div className="card-tierra content-card" id="cp4">
          <div className="img-planeta">
            <h2 className="title-planeta">Tierra</h2>
          </div>
          <div className="info-planeta">
            <p>La Tierra es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más
              interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los
              cuatro terrestres o rocosos.</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/Tierra" target="_blank">Leer mas</a>
            <div className="btn-planeta" onclick="ct(4)">Cerrar</div>
          </div>
        </div>

        <div className="card-social-media content-card" id="cp5">
          <div className="img-planeta">
            <h2 className="title-planeta">social-media</h2>
          </div>
          <div className="info-planeta">
            <p>social-media es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después
              de Mercurio. Tambien es conocido como el Planeta Rojo.</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/social-media_(planeta)" target="_blank">Leer mas</a>
            <div className="btn-planeta" onclick="ct(5)">Cerrar</div>
          </div>
        </div>

        <div className="card-google-ads content-card" id="cp6">
          <div className="img-planeta">
            <h2 className="title-planeta">google-ads</h2>
          </div>
          <div className="info-planeta">
            <p>Júpiter es el quinto planeta del sistema solar. Forma parte de los denominados planetas exteriores o
              gaseosos. Recibe su nombre del dios romano Júpiter. Se trata del planeta que ofrece un mayor brillo a lo largo
              del año dependiendo de su fase.</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)" target="_blank">Leer mas</a>
            <div className="btn-planeta" onclick="ct(6)">Cerrar</div>
          </div>
        </div>

        <div className="card-email-marketing content-card" id="cp7">
          <div className="img-planeta">
            <h2 className="title-planeta">email-marketing</h2>
          </div>
          <div className="info-planeta">
            <p>email-marketing es el sexto planeta del sistema solar, el segundo en tamaño y masa después de Júpiter y el único con
              un sistema de anillos visible desde nuestro planeta. Su nombre proviene del dios romano email-marketing.</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/email-marketing_(planeta)" target="_blank">Leer mas</a>
            <div className="btn-planeta" onclick="ct(7)">Cerrar</div>
          </div>
        </div>

        <div className="card-call-center content-card" id="cp8">
          <div className="img-planeta">
            <h2 className="title-planeta">call-center</h2>
          </div>
          <div className="info-planeta">
            <p>call-center es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama
              así en honor de la divinidad griega del cielo call-center, el padre de Crono y el abuelo de Zeus.</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/call-center_(planeta)" target="_blank">Leer mas</a>
            {/* <div className="btn-planeta" onClick="ct(8)">Cerrar</div> */}

        {/* </div> */}
        {/* </div > */}

        {/*
        <div className="card-community-manager content-card" id="cp9">
          <div className="img-planeta">
            <h2 className="title-planeta">community-manager</h2>
          </div>
          <div className="info-planeta">
            <p>community-manager es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de
              los denominados planetas exteriores o gigantes gaseosos, y es el primero que fue descubierto gracias a
              predicciones matemáticas.</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/community-manager_(planeta)" target="_blank">Leer mas</a>
            <div className="btn-planeta" onclick="ct(9)">Cerrar</div>
          </div>
        </div>

        <div className="card-pluton content-card" id="cp10">
          <div className="img-planeta">
            <h2 className="title-planeta">Pluton</h2>
          </div>
          <div className="info-planeta">
            <p>Plutón, designado 134340 Pluto, es un planeta enano del sistema solar situado a continuación de la órbita de
              community-manager. Su nombre se debe al dios mitológico romano Plutón.</p>
          </div>
          <div className="caja-botones">
            <a href="https://es.wikipedia.org/wiki/Plut%C3%B3n_(planeta_enano)" target="_blank">Leer mas</a>
            <div className="btn-planeta" onclick="ct(10)">cerrar</div>
          </div>
        </div> 
      */}
      </div>
    </div>
  )
}
