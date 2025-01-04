import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import styled from 'styled-components'

const Fondo = styled.header`
    background-color: var(--Color_Negro);
    padding: 30px 30px;
    border-bottom: 2px solid var(--Color_Brillo);
    box-shadow: 0 0 15px 4px var(--Color_Brillo);
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    img{
        width:120px;
    }  
    `
const Boton = styled.div`   
    display: flex;
    gap: 15px;
    button{
        width: 100px;
        font-size: x-small;
        font-family: var(--Letra_Secundaria);
        font-weight:700;
        color: #fff;
        border-radius: 7px;
        background-color: var(--Color_Secundario);
        border: 1px solid #fff;
    }
    button:hover{
        background-color: #000;
        border: 1px solid var(--Color_Brillo);
        box-shadow: inset 0 0 4px 3px var(--Color_Brillo);
    }
`

function Header() {

    return (
        <Fondo>
            <img className='logo' src={Logo} alt="logo" />
            <Boton>
                <Link to={"/"}><button>HOME</button></Link>
                <Link to={"/agregar"}><button>NUEVO VIDEO</button></Link>
            </Boton>
        </Fondo>
    )
}

export default Header