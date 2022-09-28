import Container from "./container.js";

export let productos = new Container("./../DB/products.json");

////////////// Lista todos los productos ////////////////////
export const getProducts = (req, res) => {
  if (req.params.id == undefined) return res.send(productos.getAll());
  const id = Number(req.params.id);
  const product = productos.getById(id);
  if (!product)
    return res
      .status(404)
      .send({ message: "El ID no pertenece a un producto listado" });
  res.json(product);
};

////////Agrega Producto/////////////////
export const addProduct = async (req, res) => {
  const { name, description, code, pic, price, stock } = req.body;
  await productos.save({ name, description, code, pic, price, stock });
  res.json({ message: "Producto agregado" });
};

///////// Actualiza un producto ///////////////
export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || id > productos.objects.length)
    return res
      .status(400)
      .send({ message: "Ingresa el ID de un producto listado" });
  if (isNaN(id))
    return res
      .status(400)
      .send({ message: "Ingresa el ID de un producto listado" });
  productos.update(id, req.body);
  res.json({ message: "Producto actualizado" });
};

/////////////  Borra un  product ///////////////////
export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id))
    return res
      .status(400)
      .send({ message: "Ingresa el ID de un producto listado" });
  const productDeleted = productos.deleteById(id);
  if (productDeleted === -1)
    return res
      .status(404)
      .json({ message: "El ID no pertenece a un producto listado" });
  res.json({ message: "Producto eliminado" });
};

////////// Exporta los controladores /////////////

/*export default {
  products ,
  getProducts ,
  addProduct ,
  updateProduct ,
  deleteProduct,
};*/