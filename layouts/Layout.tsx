import { FC } from "react"
import { Navbar } from '../components';
import Head from 'next/head';
import { FooterSection } from "../sections";

interface Props {
    children?: JSX.Element,
    title?: string,
    author?: string,
    description?: string,
    favIcon?: string,
    metaTags?: string[],
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;
const defaultOGImage = `${origin}/img/logo.png`;

export const Layout: FC<Props> = ({ children, title, author, description, favIcon, metaTags }) => {

    return (
        <>
            <Head>
                {/*TITLE */}
                <title>
                    {title || 'Creativa 2020'}
                </title>

                {/*FAVICON */}
                <link href="./img/favicon.png" rel="icon" />
                <link rel="shortcut icon" href={`${favIcon || 'img/logo.png'}`} type="image/x-icon" />
                {/*AUTHOR */}
                <meta name='author' content={`Creativa 2020 - ${author || 'Luis Leal'}`} />
                {/*DESCRIPTION AND KEYWORDS */}
                <meta name='description' content={`${description + '- creativa 2020' || 'Creativa 2020 es la primera agencia de marketing especializada en el sector óptico y salud visual.'} `} />
                <meta name='keywords' content={`${metaTags + ',' || ''}creativa 2020, marketing, celaya, agencia, agencia especializada en el sector optico, salud visual`} />
                {/*METATAGS*/}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${title || 'Creativa 2020'} `} />
                <meta property="og:description" content={`${description || 'Agencia de marketing especializada en el sector óptico y salud visual.'} `} />
                <meta property="og:image" content={`${favIcon || defaultOGImage}`} />
                <meta property="og:url" content="https://creativa2020.com/" />
                <meta property="og:site_name" content="Creativa 2020" />

            </Head>

            {/* <TopBar /> */}
            <Navbar />

            {children}

            <FooterSection />
        </>


    )
}
