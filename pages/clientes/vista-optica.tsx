import { NextPage } from 'next'
import { Layout } from '../../layouts';

import styles from '../../styles/client-page.module.css'

const visualCenterPage: NextPage = () => {

  return (
    <Layout title={"Vista Óptica | Creativa2020"} metaTags={['Vista Optica', 'Queretaro', 'Opticas', 'El pueblito']} description={`Portafolio sobre nuestro cliente Vista Óptica`}>

      <section id='clientsPage'>
        <div className={styles.clientPage}>
          <h1>Visual Center</h1>

          <div className={styles.textInfo}>
            <div style={{ backgroundColor: '#eaeaf8', maxWidth: '700px', maxHeight: '400px', margin: '40px', borderRadius: '10px' }}>
              <img src={`/img/clients/VO2.png`} alt='Visual Center' className={styles.logo} />

              <div className={styles.title}>
                <h3>{`"Hemos hecho sinergia porque lo más importante de la agencia es que conocen mi mercado"`}</h3>
                <hr style={{ position: 'relative', top: '-100px' }} />
              </div>

              <ul>
                <li>Fortalecimiento de administración interna</li>
                <li>Fortalecimiento de canales de comunicación</li>
              </ul>
            </div>

          </div>
        </div>

        <div className='grid-vo-1'>
          <div>
          <img src="/img/clients/vista-optica/12.jpg" alt="Vista óptica" />

          </div>
          <div>
            <div className="grid-vo-2">
                <div>
        <img src="/img/clients/vista-optica/10.jpg" alt="Vista óptica" />
        <img src="/img/clients/vista-optica/9.jpg" alt="Vista óptica" />
                </div>

                <div>
                <img src="/img/clients/vista-optica/7.jpg" alt="Vista óptica" />
                <img src="/img/clients/vista-optica/6.jpg" alt="Vista óptica" />
                </div>
            </div>
          </div>
        </div>
        <img src="/img/clients/vista-optica/8.jpg" alt="Vista óptica" />
      
      <div className="grid-vo-3">
        <div>
        <img src="/img/clients/vista-optica/4.jpg" alt="Vista óptica" />
        <img src="/img/clients/vista-optica/1.jpg" alt="Vista óptica" />

        </div>
        <div>
        <img src="/img/clients/vista-optica/5.jpg" alt="Vista óptica" />
        <img src="/img/clients/vista-optica/3.jpg" alt="Vista óptica" />

        </div>
        <div>
        <img src="/img/clients/vista-optica/2.jpg" alt="Vista óptica" />
        <img src="/img/clients/vista-optica/11.jpg" alt="Vista óptica" />

        </div>
      </div>
      </section>

    </Layout>
  )
}

export default visualCenterPage;