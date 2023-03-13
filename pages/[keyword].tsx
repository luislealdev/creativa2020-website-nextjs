import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { keywords } from '../data/keywords/index';
import { Layout } from '../layouts/Layout';
import { PrincipalSection } from '../sections/PrincipalSection';
import { MainInfo } from '../sections/MainInfo';

interface Props {
    keywordProp: string
}

export const KeywordPage: NextPage<Props> = ({ keywordProp }) => {

    return (
        <Layout title={ keywordProp + ' | Creativa 2020'} metaTags={[keywordProp]}>
            <>
                <PrincipalSection />
                <MainInfo />
            </>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = keywords.map(keyword=>(keyword.replace(/\s+/g, '-').toLowerCase()));
    
    return {
        paths: paths.map(keyword => ({
            params: { keyword }
        })),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { keyword } = params as { keyword: string };

    const keywordProp = keyword.replaceAll("-"," ").toUpperCase();
    
    return {
        props: {
            keywordProp
        },
    };
}

export default KeywordPage;