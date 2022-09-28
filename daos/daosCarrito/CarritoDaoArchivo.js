import ContenedorArchivo from "../../contenedores/contenedorArchivo.js"

class CarritoDaoArchivo extends ContenedorArchivo {

    constructor(rutaDir) {
        super(`${rutaDir}/carritos.json`)
    }
}

export default CarritoDaoArchivo
