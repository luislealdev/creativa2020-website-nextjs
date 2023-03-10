import { NextPage } from 'next'
import Image from 'next/image';
import { Layout } from '../../layouts';

import styles from '../../styles/client-page.module.css'

const visualCenterPage: NextPage = () => {

  return (
    <Layout title={"Salud Visual Center | Creativa 2020"} metaTags={['Salud', 'optometria', 'visual center', 'Celaya']} description={`Portafolio sobre Salud Visual Center`}>

      <section id='clientsPage'>
        <div className={styles.clientPage}>
          <h1>Salud Visual Center</h1>

          <div className={styles.textInfo}>
            <div style={{ backgroundColor: '#eaeaf8', maxWidth: '700px', maxHeight: '400px', margin: '40px', borderRadius: '10px' }}>
              <Image src={`/img/clients/SVC2.png`} alt='Salud Visual Center' className={styles.logo} width={500} height={500} />

              <div className={styles.title}>
                <h3>{`"Me ayudaron a que mi marca se viera profesional y a que pudiera estar en otros canales"`}</h3>
                <hr style={{ position: 'relative', top: '-100px' }} />
              </div>

              {/* <ul>
                <li>Incremento en el porcentaje de ventas y entradas</li>
                <li>Presencia de marca</li>
              </ul> */}
            </div>

          </div>
        </div>

        <div className='grid-svc'>
          <div>
            <Image src="/img/clients/salud-visual-center/3.png" alt='salud visual center' width={500} height={500} />
          </div>
          <div>
            <Image src="/img/clients/salud-visual-center/1.jpg" alt='salud visual center' width={500} height={500} />
            <Image src="/img/clients/salud-visual-center/4.jpeg" alt='salud visual center' width={500} height={500} />
          </div>
          <div>
            <Image src="/img/clients/salud-visual-center/2.jpg" alt='salud visual center' width={500} height={500} />
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default visualCenterPage;