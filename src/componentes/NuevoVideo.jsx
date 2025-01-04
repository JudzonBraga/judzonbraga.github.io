import styled from "styled-components"
import CampoTexto from "./CampoTexto"
import ListaOpciones from "./ListaOpciones"
import AreaText from "./AreaText"
import Boton from "./Boton"
import { useState } from "react"

const Formulario = styled.form`
        font-family: var(--Letra_Principal);
        padding: 40px 80px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    `
    const H2 = styled.h2`
        border-top: 2px solid #262626;
        border-bottom: 2px solid #262626;
        padding: 10px;
    `
    const Contenedor = styled.section`
        text-align: center;
    `
    const Contenedor1 = styled.div`
        display: flex;
        justify-content: center;
        gap: 10vh;
    `
function NuevoVideo() {
    
    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            titulo: titulo,
            categoria: categoria,
            imagen: imagen,
            video: video,
            descripcion: descripcion
        }
        console.log(datosAEnviar);
    }
        return <Formulario onSubmit={manejarEnvio}>
        <Contenedor>
            <h1>NUEVO VIDEO</h1>
            <h6>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h6>
        </Contenedor>
        <H2>CREAR TARJETA</H2>
        <Contenedor1>
                <CampoTexto titulo="Título" placeholder="ingresa el titulo" 
                required valor={titulo} actualizarValor={setTitulo} />
                <ListaOpciones valor={categoria} actualizarValor={setCategoria}/>
        </Contenedor1>
        <Contenedor1>
                <CampoTexto titulo="Imagen" placeholder="ingrese enlace de la imagen" 
                required value={imagen} valor={imagen} actualizarValor={setImagen}/>
                <CampoTexto titulo="Video" placeholder="ingrese enlace del video" 
                required value={video} valor={video} actualizarValor={setVideo}/>
        </Contenedor1>
        <Contenedor1>
            <AreaText titulo="Descripción" placeholder="¿De qué se trata este vídeo?" 
            required valor={descripcion} actualizarValor={setDescripcion} />
        </Contenedor1>
        <Contenedor1>
            <Boton texto="GUARDAR" />
            <Boton texto="LIMPIAR" />
            <Boton texto="CANCELAR" />
        </Contenedor1>
    </Formulario>
}

export default NuevoVideo