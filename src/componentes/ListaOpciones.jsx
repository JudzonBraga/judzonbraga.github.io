import styled from "styled-components"
import {categoriasDatos} from "../componentes/Body"

const Contenedor2 = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 15px;
        width: 50vh;
    `
    const ListaOpciones = (props) => {
        const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    
    return <Contenedor2>
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {categoriasDatos.map((dato, index)  => 
            <option  key={index} value={dato.nombre}>{dato.nombre} </option>)}
        </select>
    </Contenedor2>
}

export default ListaOpciones