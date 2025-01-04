import styled from "styled-components"

    const Contenedor3 = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
`
const AreaText = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <Contenedor3>
        <label>{props.titulo}</label>
        <textarea placeholder={props.placeholder} required={props.required}
            value={props.valor} onChange={manejarCambio} ></textarea>
    </Contenedor3>
}

export default AreaText