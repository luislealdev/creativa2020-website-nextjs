import { Layout } from '../../layouts/Layout';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { clientsData } from '../../data/clients';
import { getClientInfo } from '../../utils/getClientInfo';
import { clientInfoInterface } from '../../interfaces';
import styles from '../../styles/client-page.module.css'

interface Props {
    data: clientInfoInterface
}

const clientPage: NextPage<Props> = ({ data }) => {

    return (
        <Layout title={data.title + " | Creativa2020"} metaTags={data.metatags}>
            <div className={styles.clientPage}>
                <h1>{data.title}</h1>

                <img src={`/img/clients/${data.logo}.png`} alt={data.title} className={styles.logo} />

                <div className={styles['masonry-container']}>
                    {
                        data.images.map(img => (
                            <div className={styles['masonry-item']}>
                                <img src={`/img/clients/${data.slug}/${img}.png`} key={img} alt={data.title} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const clientsNames: string[] = clientsData.map(client => client.slug);

    return {
        paths: clientsNames.map(slug => ({
            params: { slug }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug } = params as { slug: string }
    const data = getClientInfo(slug);

    if (!data) return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }

    return {
        props: {
            data
        },
        revalidate: 86400
    }
}


export default clientPage;