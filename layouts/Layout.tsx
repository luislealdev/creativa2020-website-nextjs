import { FC } from "react"
import { Navbar, TopBar } from '../components';
import Head from 'next/head';
import { FooterSection } from "../sections";

interface Props {
    children?: JSX.Element,
    title?: string,
    description?: string,
    favIcon?: string
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title, description, favIcon }) => {

    return (
        <>
            <Head>
                {/*TITLE */}
                <title>
                    {title || 'Creativa2020'}
                </title>

                {/*FAVICON */}
                <link href="./img/favicon.png" rel="icon" />
                <link rel="shortcut icon" href="./img/logo.jpg" type="image/x-icon" />
                {/*AUTHOR */}
                <meta name='author' content='CREATIVA2020 - Luis Leal' />
                {/*DESCRIPTION AND KEYWORDS */}
                <meta name='description' content={`${description}`} />
                <meta name='keywords' content={`${title}, creativa2020, marketing, celaya`} />
                {/*METATAGS*/}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${title}`} />
                <meta property="og:description" content={`Información sobre ${description}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
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
