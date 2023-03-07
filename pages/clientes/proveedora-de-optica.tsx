import { NextPage } from 'next'
import Image from 'next/image';
import { Layout } from '../../layouts';

import styles from '../../styles/client-page.module.css'

const visualCenterPage: NextPage = () => {

  return (
    <Layout title={"Proveedora De Óptica | Creativa 2020"} metaTags={['Proveedora de optica', 'lentes', 'armazones', 'ventas']} description={`Portafolio sobre Proveedora de óptica`}>

      <section id='clientsPage'>
        <div className={styles.clientPage}>
          <h1>Proveedora De Óptica</h1>

          <div className={styles.textInfo}>
            <div style={{ backgroundColor: '#eaeaf8', maxWidth: '700px', maxHeight: '400px', margin: '40px', borderRadius: '10px' }}>
              <Image src={`/img/clients/PDO2.png`} alt='Proveedora De Óptica' className={styles.logo} width={500} height={500}/>

              <div className={styles.title}>
                <h3>{`"Me ayudaron a crear un catálogo de productos profesional"`}</h3>
                <hr style={{ position: 'relative', top: '-100px' }} />
              </div>

              {/* <ul>
                <li>Currícula completa de alumnos</li>
                <li>Página web optimizada</li>
                <li><a href="https://cursosdeoptometria.com.mx" target='_blank'>cursosdeoptometria.com.mx</a></li>
              </ul> */}
            </div>
          </div>
        </div>


        <div className="grid-pdo-1">
              <div>
              <Image src="/img/clients/proveedora-de-optica/3.jpg" alt="Proveedora de optica" width={500} height={500} />
              </div>
              <div>
              <Image src="/img/clients/proveedora-de-optica/5.jpg" alt="Proveedora de optica"  width={500} height={500}/>
              <Image src="/img/clients/proveedora-de-optica/6.jpg" alt="Proveedora de optica"  width={500} height={500}/>
              </div>
              <div>
              <Image src="/img/clients/proveedora-de-optica/1.jpg" alt="Proveedora de optica"  width={500} height={500}/>
              </div>
        </div>
      </section>

    </Layout>
  )
}

export default visualCenterPage;