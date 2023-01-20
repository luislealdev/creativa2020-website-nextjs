import { NextPage } from "next"
import { Layout } from "../layouts/Layout"
import { MainInfo, PrincipalSection } from "../sections"

const HomePage: NextPage = () => {
    return (
        <Layout title="Creativa2020 | Agencia de marketing" description="Sobre nosotros: Somos una agencia de marketing especializada en el sector óptico que busca entender perfectamente la visión de tu negocio." >
            <>
                <PrincipalSection />
                <MainInfo />
            </>
        </Layout>
    )
}

export default HomePage;