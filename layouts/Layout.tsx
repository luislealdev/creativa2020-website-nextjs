import { FC } from "react"
import { Navbar, TopBar } from '../components';
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

export const Layout: FC<Props> = ({ children, title, author, description, favIcon, metaTags }) => {

    return (
        <>
            <Head>
                {/*TITLE */}
                <title>
                    {title || 'Creativa2020'}
                </title>

                {/*FAVICON */}
                <link href="./img/favicon.png" rel="icon" />
                <link rel="shortcut icon" href={favIcon || 'img/logo.png'} type="image/x-icon" />
                {/*AUTHOR */}
                <meta name='author' content={`CREATIVA2020 - ${author || 'Luis Leal'}`} />
                {/*DESCRIPTION AND KEYWORDS */}
                <meta name='description' content={`${description || 'Agencia de marketing especializada en el sector óptico y salud visual.'} `} />
                <meta name='keywords' content={`${metaTags + ',' || ''}creativa2020, marketing, celaya`} />
                {/*METATAGS*/}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${title || 'Creativa2020'} `} />
                <meta property="og:description" content={`${description || 'Agencia de marketing especializada en el sector óptico y salud visual.'} `} />
                <meta property="og:image" content={`${origin}/img/logo.png`} />
                <meta property="og:url" content="https://creativa2020.com/" />
                <meta property="og:site_name" content="Creativa 2020" />

            </Head>

            <TopBar />
            <Navbar />

            {children}

            <FooterSection />
        </>


    )
}
