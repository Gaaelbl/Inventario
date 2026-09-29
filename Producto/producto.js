class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    infoHtml() {
        return "Código: " + this.codigo +
            "<br>Nombre: " + this.nombre +
            "<br>Cantidad: " + this.cantidad +
            "<br>Costo: " + this.costo +
            "<br><br>";
    }
}