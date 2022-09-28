import ContenedorArchivo from "../../contenedores/contenedorArchivo.js"

class ProductoDaoArchivo extends ContenedorArchivo {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    }
}

export default ProductoDaoArchivo
