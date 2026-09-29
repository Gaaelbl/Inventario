class Inventario {
    constructor() {
        this.productos = [];
    }

    existe(codigo) {
        return this.productos.some(p => p.codigo === codigo);
    }

    agregar(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(codigo) {
        let indice = this.productos.findIndex(p => p.codigo === codigo);

        if (indice === -1) {
            return "No se encontró un producto con el código: " + codigo;
        }

        let eliminado = this.productos[indice];
        this.productos.splice(indice, 1);

        return "Producto eliminado: " + eliminado.nombre;
    }

    listar() {
        if (this.productos.length === 0) {
            return "No hay productos en el inventario";
        }
        let texto = "";
        for (let i = 0; i < this.productos.length; i++) {
            texto += this.productos[i].infoHtml();
        }
        return texto;
    }

    listarInverso() {
        if (this.productos.length === 0) {
            return "No hay productos en el inventario";
        }
        let texto = "";
        for (let i = this.productos.length - 1; i >= 0; i--) {
            texto += this.productos[i].infoHtml();
        }
        return texto;
    }
}