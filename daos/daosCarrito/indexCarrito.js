import config from "../../config.js";

let carritosDao;

switch (config.MODO_PERSISTENCIA) {
  case "json":
    const { default: CarritoDaoArchivo } = await import(
      "./CarritoDaoArchivo.js"
    );
    carritosDao = new CarritoDaoArchivo(config.fileSystem.path);
    break;
  case "firebase":
    const { default: CarritoDaoFirebase } = await import(
      "./CarritoDaoFirebase.js"
    );
    carritosDao = new CarritoDaoFirebase();
    break;
  case "mongodb":
    const { default: CarritosDaoMongoDb } = await import(
      "./CarritoDaoMongoDb.js"
    );
    carritosDao = new CarritosDaoMongoDb();
    break;
  default:
    const { default: CarritosDaoMem } = await import(
      "./CarritoDaoMem.js"
    );
    carritosDao = new CarritosDaoMem();
    break;
}

export default  carritosDao ;
