import styled from 'styled-components'
import Logo from '../assets/img/logo.png'

const Pie = styled.footer`
    background-color: var(--Color_Negro);
    padding: 20px 30px;
    text-align:center;
    position: fixed;
    bottom: 0;
    width:100%;
    height:70px;
    border-top: 2px solid var(--Color_Brillo);
    box-shadow: 0 0 15px 4px var(--Color_Brillo);
    box-sizing: border-box;
    img{
        width:120px;
    } 
`
function Footer (){
    return <Pie>
        <img src={Logo} alt="logo" />
    </Pie>
}

export default Footer