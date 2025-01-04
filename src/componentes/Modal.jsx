import styled from "styled-components"

const PopUp = styled.dialog`
    position: fixed;
    bottom: 50%;
    width:500px;
`

const ModalZoom = ({datos}) => {
    return <>
        <PopUp open={!!datos}>
            <p>texto</p>
            <form method="dialog" >
                <button>OK</button>
            </form>
        </PopUp>
    </>
}

export default ModalZoom