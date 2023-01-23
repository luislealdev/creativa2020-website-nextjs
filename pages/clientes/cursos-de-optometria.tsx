import { NextPage } from 'next'
import { Layout } from '../../layouts';

import styles from '../../styles/client-page.module.css'
import NextLink from 'next/link';

const visualCenterPage: NextPage = () => {

  return (
    <Layout title={"Cursos De Optometría | Creativa2020"} metaTags={['Cursos', 'optometria', 'rod castañeda', 'Celaya']} description={`Portafolio sobre Cursos de optometría`}>

      <section id='clientsPage'>
        <div className={styles.clientPage}>
          <h1>Cursos de optometria</h1>

          <div className={styles.textInfo}>
            <div style={{ backgroundColor: '#eaeaf8', maxWidth: '700px', maxHeight: '400px', margin: '40px', borderRadius: '10px' }}>
              <img src={`/img/clients/CDO2.png`} alt='Visual Center' className={styles.logo} />

              <div className={styles.title}>
                <h3>{`"Conocen del sector y ese conocimiento ayuda a que pueda transmitir mis cursos, talleres y certificaciones"`}</h3>
                <hr style={{ position: 'relative', top: '-100px' }} />
              </div>

              <ul>
                <li>Currícula completa de alumnos</li>
                <li>Página web optimizada</li>
                <li><NextLink href="https://cursosdeoptometria.com.mx" target='_blank' rel="noreferrer">cursosdeoptometria.com.mx</NextLink></li>
              </ul>
            </div>
          </div>
        </div>

        <img src="/img/clients/cursos-de-optometria/5.jpg" alt="Cursos de optometria" />
        <div className="grid-cdo">
            <div>
            <img src="/img/clients/cursos-de-optometria/6.jpg" alt="Cursos de optometria" />
            </div>
            <div>
            <img src="/img/clients/cursos-de-optometria/4.jpg" alt="Cursos de optometria" />
            </div>
            <div>
            <img src="/img/clients/cursos-de-optometria/1.jpg" alt="Cursos de optometria" />
            </div>
        </div>
        <img src="/img/clients/cursos-de-optometria/7.jpg" alt="Cursos de optometria" />
      </section>

    </Layout>
  )
}

export default visualCenterPage;