import config from "../../config.js";

let productosDao;

switch (config.MODO_PERSISTENCIA) {
  case "json":
    const { default: ProductoDaoArchivo } = await import(
      "./ProductoDaoArchivo.js"
    );
    productosDao = new ProductoDaoArchivo(config.fileSystem.path);
    break;
  case "firebase":
    const { default: ProductoDaoFirebase } = await import(
      "./ProductoDaoFirebase.js"
    );
    productosDao = new ProductoDaoFirebase();
    break;
  case "mongodb":
    const { default: ProductoDaoMongoDb } = await import(
      "./ProductoDaoMongoDb.js"
    );
    productosDao = new ProductoDaoMongoDb();
    break;
  default:
    const { default: ProductoDaoMem } = await import(
      "./ProductoDaoMem.js"
    );
    productosDao = new ProductoDaoMem();
    break;
}

export default  productosDao ;
