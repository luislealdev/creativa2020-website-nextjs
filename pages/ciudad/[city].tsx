import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { cities } from '../../data/cities/index';
import { Layout } from '../../layouts/Layout';
import { ContactSection, RecentBlogPostSection, Clients } from '../../sections';
import { AboutUsSection } from '../../sections/AboutUsSection';
import { PackagesSection } from '../../sections/PackagesSection';


interface Props {
    cityName: string
}

export const ArticlePage: NextPage<Props> = ({ cityName }) => {

    return (
        <Layout title={'Agencia de marketing en '+ cityName + '| Creativa 2020'} metaTags={[cityName]}>
            <>
            <AboutUsSection/>
            <PackagesSection/>
            <RecentBlogPostSection/>
            <ContactSection/>
            </>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = cities.map(city=>(city.replace(/\s+/g, '-').toLowerCase()));
    
    return {
        paths: paths.map(city => ({
            params: { city }
        })),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { city } = params as { city: string };

    const cityName = city.replace("-"," ").toUpperCase();
    console.log(cityName);
    

    return {
        props: {
            cityName
        },
    };
}

export default ArticlePage;