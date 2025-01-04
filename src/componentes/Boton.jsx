import styled from "styled-components"

const Boton = styled.button`
        width: 150px;
        border: 2px solid #FFFFFF;
        color: #FFFFFF;
    `
const Botones = (props) => {
  
    return <Boton>
        {props.texto} 
        </Boton>
}

export default Botones