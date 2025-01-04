import styled from "styled-components"

    const Contenedor2 = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 15px;
        width: 50vh;
    `
    const Casilla = styled.input`
        border-radius: 7px;
        background-color: #181616;
        border: 2px solid #262626;
        height: 30px;
        color: #A5A5A5;
        padding-left: 15px;
    `
const CampoTexto = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <Contenedor2>
        <label>{props.titulo}</label>
        <Casilla placeholder={props.placeholder} required={props.required} value={props.valor} 
        onChange={manejarCambio} />
    </Contenedor2>
}

export default CampoTexto