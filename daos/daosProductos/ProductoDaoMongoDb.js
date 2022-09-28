import ContenedorMongoDb from "../../contenedores/contenedorMongoDb.js";

class ProductoDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super("productos", {
      name: { type: String, required: true },
      description: { type: String, required: true },
    });
  }
}

export default ProductoDaoMongoDb;
