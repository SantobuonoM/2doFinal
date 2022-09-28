import express from "express";
import  carritosDao  from "../daos/daosCarrito/indexCarrito.js";
/*getsProducts,
addProductToCarrito,
deleteOneProduct,*/

const routerCarritos = express.Router();

routerCarritos.post("/", (req, res) => carritosDao.add(req, res));

routerCarritos.delete("/:id", (req, res) => carritosDao.deletes(req, res));

routerCarritos.get("/:id/products", (req, res) => carritosDao.get(req, res));

routerCarritos.post("/:id?/products", (req, res) =>
carritosDao.addProductToCarrito(req, res)
);

routerCarritos.delete("/:id/products/:id_prod", (req, res) =>
carritosDao.deleteOneProduct(req, res)
);

export default routerCarritos;
