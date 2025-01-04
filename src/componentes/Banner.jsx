import styled from "styled-components"
import Baner from "../assets/img/baner.jpg"

const Fondo = styled.div`
        display: flex;
        max-height: 400px;
        padding: 100px 40px;
        gap: 25px;
        justify-content: space-between;
        box-sizing: border-box;
        font-family: var(--Letra_Principal);  
        background-image: linear-gradient(
            rgba(0,0,0,0.4), rgba(0, 0, 0, 0.8)), url(${Baner});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const Interno1 = styled.article`  
    color: #fff;
    width: 50%;
    `
    const Interno2 = styled.article`
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    img{
        max-width: 300px;
        border: 3px solid #6BD1FF;
        border-radius:15px;
        box-shadow: inset 0 0 3px 3px #6BD1FF;
    }
    `
    const H1 = styled.h2`
        background-color:#6BD1FF;
        border-radius: 10px;
        color: #FFF;
        padding: 10px;
        max-width: 30vh;
        text-align:center;
        font-size: xx-large;
    `
    
function Banner() {

    return <Fondo>
        <Interno1>
            <H1>FRONT END</H1>
            <h1>Challenge React</h1>
            <h5 style={{fontWeight: "300"}}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte
                en la resolución de un problema para poder aplicar todos los conocimientos adquiridos
                en la formación React.</h5>
        </Interno1>
        <Interno2>
            <img src={Baner} alt="imagen"/>
        </Interno2>
    </Fondo>
}

export default Banner