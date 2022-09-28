import express from "express";
import productosDao from "../daos/daosProductos/indexProducto.js";

import  config  from "../config.js";

const routerProducts = express.Router();

const esAdmin = config.isAdmin;
function soloAdmins(req, res, next) {
  if (!esAdmin) {
    res.status(403).json({
      code: 403,
      msg: `Forbbiden Acces ${req.method} ${req.baseUrl}${req.url}`,
    });
  } else {
    next();
  }
}






routerProducts.get("/:id?", (req, res) => productosDao.get(req, res));

routerProducts.post("/", soloAdmins, (req, res) => productosDao.add(req, res));

routerProducts.put("/:id", soloAdmins, (req, res) => productosDao.update(req, res));
routerProducts.delete("/:id", soloAdmins, (req, res) =>
productosDao.deletes(req, res)
);

export default routerProducts;
