import { NextPage } from 'next'
import Image from 'next/image';
import { Layout } from '../../layouts';

import styles from '../../styles/client-page.module.css'

const visualCenterPage: NextPage = () => {

  return (
    <Layout title={"Visual Center | Creativa 2020"} metaTags={['Visual Center', 'Visual', 'Opticas', 'Celaya']} description={`Portafolio sobre nuestro cliente Visual Center`}>

      <section id='clientsPage'>
        <div className={styles.clientPage}>
          <h1>Visual Center</h1>

          <div className={styles.textInfo}>
            <div style={{ backgroundColor: '#eaeaf8', maxWidth: '700px', maxHeight: '400px', margin: '40px', borderRadius: '10px' }}>
              <Image src={`/img/clients/VC2.png`} alt='Visual Center' className={styles.logo} width={500} height={500}/>

              <div className={styles.title}>
                <h3>{`"Rediseñaron mi imagen y ahora la empresa es más atractiva para los clientes, ¡gracias!"`}</h3>
                <hr style={{ position: 'relative', top: '-100px' }} />
              </div>

              <ul>
                <li>Incremento en el porcentaje de ventas y entradas</li>
                <li>Presencia de marca</li>
              </ul>
            </div>

          </div>
        </div>

        <div className='grid-40-30-30'>
          <div>
            <Image src="/img/clients/visual-center/1.jpg" alt='Visual Center' width={500} height={500}/>
            <Image src="/img/clients/visual-center/2.jpg" alt='Visual Center' width={500} height={500}/>
            <Image src="/img/clients/visual-center/3.jpg" alt='Visual Center' width={500} height={500}/>
          </div>
          <div>
            <Image src="/img/clients/visual-center/4.jpg" alt='Visual Center' width={500} height={500}/>
            <Image src="/img/clients/visual-center/5.jpg" alt='Visual Center' width={500} height={500}/>
            <Image src="/img/clients/visual-center/6.jpg" alt='Visual Center' width={500} height={500}/>
          </div>
          <div>
            <Image src="/img/clients/visual-center/8.jpg" alt='Visual Center' width={500} height={500}/>
            <Image src="/img/clients/visual-center/9.jpg" alt='Visual Center' width={500} height={500}/>
            <Image src="/img/clients/visual-center/10.jpg" alt='Visual Center' width={500} height={500}/>
            <Image src="/img/clients/visual-center/11.jpg" alt='Visual Center' width={500} height={500}/>
          </div>
        </div>
        <Image src="/img/clients/visual-center/7.jpg" alt='Visual Center' width={500} height={500}/>
      </section>

    </Layout>
  )
}

export default visualCenterPage;