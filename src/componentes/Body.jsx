import Cards from "./Cards"
import Categorias from "./Categorias"


export const categoriasDatos = [
    { nombre: "FRONT END", color: "#6BD1FF" },
    { nombre: "BACK END", color: "#00C86F" },
    { nombre: "INNOVACIÓN Y GESTIÓN", color: "#FFBA05" }
]

function Body({ alSeleccionarDato }) {
    return <>
        {categoriasDatos.map((recibe) => <Categorias datos={recibe} key={recibe.nombre}>
            <Cards alSolicitarPopup={alSeleccionarDato} />
        </Categorias>)}
    </>
}

export default Body