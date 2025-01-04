import styled from "styled-components"
import Cards from "./Cards"

const Secciones = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding: 25px 50px;
    font-family: var(--Letra_Principal);
`
const H3 = styled.h3`
    padding: 10px 15px;
    border-radius: 10px;
    max-width: 230px;
    text-align: center;
    margin-top: 0;
`
const Contenedor = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
`

const Categorias = (props, alSolicitarPopup) => {
//destructuracion
    const {color, nombre} = props.datos

    return <Secciones>
        <H3 style={{backgroundColor: color} }> {nombre} </H3>
        <Contenedor>
            <Cards color={color} alSolicitarClick={alSolicitarPopup} />
            <Cards color={color} alSolicitarClick={alSolicitarPopup}/>
            <Cards color={color} alSolicitarClick={alSolicitarPopup}/>
        </Contenedor>
    </Secciones>
}

export default Categorias