import ContenedorFirebase from "../../contenedores/contenedorFirebase.js"

class ProductoDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('products')
    }
}

export default ProductoDaoFirebase
