import { NextPage } from "next"
import { Layout } from "../layouts/Layout"
import { MainInfo, PrincipalSection } from "../sections"

const HomePage: NextPage = () => {
    return (
        <Layout title="Inicio" >
            <>
                <PrincipalSection />
                <MainInfo />
            </>
        </Layout>
    )
}

export default HomePage;