import styled from "styled-components"

const Cont1 = styled.div`
    display: flex;
    font-family: var(--Letra_Principal);
    color: #FFFFFF;
    flex-direction: column;
`
const Cont2 = styled.div`
    width: 50vh; 
    height: 150px;
    border-radius: 20px 20px 0 0;
    border-bottom: 0;
`
const Cont3 = styled.div`
    display: flex;
    background-color: var(--Color_Negro);
    width: 50vh;   
    justify-content: space-around; 
    font-size:small;
    border-top: 0;
    border-radius: 0 0 20px 20px;
    box-sizing: border-box;
`
    const Boton = styled.button`
    padding: 5px 10px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    background-color: var(--Color_Negro);
    font-family: var(--Letra_Secundaria);
    font-weight: 700;
    border-radius: 0 0 15px 15px;
`
const Cards = (props, alSolicitarClick) => {

    
    return  <Cont1 >
            <Cont2 style={{boxShadow: `inset 0 0 5px 4px ${props.color}`}}></Cont2>
                <Cont3 style={{border: `5px solid ${props.color}`}}>
                    <Boton>BORRAR</Boton>
                    <Boton onClick={()=>alSolicitarClick("ni")}>EDITAR</Boton>
                </Cont3>
            </Cont1>
}

export default Cards