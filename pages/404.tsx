import { Player } from '@lottiefiles/react-lottie-player';
import { Layout } from '../layouts/Layout';
import NextLink from 'next/link';
import styles from '../styles/error-page.module.css';

const ErrorPage = () => {
  return (
    <Layout title='Creativa 2020 - 404'>
      <div className={styles.margin}>
      <h5 className={styles.title}>Ops! Esta página no existe...</h5>

      <Player
    className= {styles.img}
    autoplay
    loop
    src="https://assets8.lottiefiles.com/packages/lf20_z9ed2jna.json"
    background="transparent"
  />
  <div className={styles['link-div']}>
  <NextLink href='/' passHref className={styles.link} >
        Regresar al inicio
    </NextLink>
  </div>

      </div>
    </Layout>

  )
}

export default ErrorPage