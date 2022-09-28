class ContenedorMemoria {
  constructor() {
    this.elementos = [];
  }

  get(req, res) {
    const id = req.params.id;
    if (!id) {
      return res.send(this.elementos);
    }
    const elem = this.elementos.find((elem) => elem.id == id);
    if (!elem) {
      throw new Error(`Error al listar: elemento no encontrado`);
    } else {
      return res.send(elem);
    }
  }

  listarAll() {
    return [...this.elementos];
  }

  add(req, res) {
    let newId;
    if (this.elementos.length == 0) {
      newId = 1;
    } else {
      newId = this.elementos[this.elementos.length - 1].id + 1;
    }

    const newElem = { id: newId, ...req.body };
    this.elementos.push(newElem);
    return res.send(newElem);
  }

  update(req, res) {
    const index = this.elementos.findIndex((p) => p.id == req.params.id);
    if (index == -1) {
      throw new Error(`Error al actualizar: elemento no encontrado`);
    } else {
      this.elementos[index] = { ...this.elementos[index], ...req.body };
      return res.send(this.elementos);
    }
  }

  deletes(req, res) {
    const index = this.elementos.findIndex((elem) => elem.id == req.params.id);
    if (index == -1) {
      throw new Error(`Error al borrar: elemento no encontrado`);
    } else {
      let fin = this.elementos.splice(index, 1)[0];
      return res.send(fin);
    }
  }

  
}

export default ContenedorMemoria;
