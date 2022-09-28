import ContenedorMongoDb from "../../contenedores/contenedorMongoDb.js";

class CarritosDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super("carritos", {
      name: { type: String, required: true },
      description: { type: String, required: true },

      products: { type: [], required: true, default: [] },
    });
  }
}

export default CarritosDaoMongoDb;
