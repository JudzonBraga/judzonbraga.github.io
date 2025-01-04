import { useState } from "react"
import Banner from "../componentes/Banner"
import Body from "../componentes/Body"
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import ModalZoom from "../componentes/Modal"

function Home() {

    const[datoSeleccionado, setDatoSeleccionado] = useState(null)

    return (
        <main>
            <Header />
            <Banner />
            <Body alSeleccionarDato = {dato=>setDatoSeleccionado(dato) } />
            <Footer />
            <ModalZoom datos={datoSeleccionado} />
        </main>
    )
}

export default Home