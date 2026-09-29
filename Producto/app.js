let inventario = new Inventario();

function limpiar() {
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("costo").value = "";
    document.getElementById("codigo").focus();
}

function agregarProducto() {
    let codigo = document.getElementById("codigo").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let costo = document.getElementById("costo").value.trim();

    // Validar campos vacíos
    if (codigo === "" || nombre === "" || cantidad === "" || costo === "") {
        document.getElementById("resultado").innerHTML =
            "Todos los campos son obligatorios";
        return;
    }

    // Validar números
    cantidad = Number(cantidad);
    costo = Number(costo);

    if (isNaN(cantidad) || isNaN(costo) || cantidad < 0 || costo < 0) {
        document.getElementById("resultado").innerHTML =
            "Cantidad y costo deben ser números válidos (no negativos)";
        return;
    }

    // Validar código repetido
    if (inventario.existe(codigo)) {
        document.getElementById("resultado").innerHTML =
            "Ya existe un producto con el código: " + codigo;
        return;
    }

    let producto = new Producto(codigo, nombre, cantidad, costo);
    inventario.agregar(producto);

    document.getElementById("resultado").innerHTML = "Producto agregado";
    limpiar();
}

function listarProductos() {
    document.getElementById("resultado").innerHTML =
        inventario.listar();
}

function listarInverso() {
    document.getElementById("resultado").innerHTML =
        inventario.listarInverso();
}

function eliminarProducto() {
    let codigo = document.getElementById("codigo").value.trim();

    if (codigo === "") {
        document.getElementById("resultado").innerHTML =
            "Escribe el código del producto a eliminar";
        return;
    }

    document.getElementById("resultado").innerHTML =
        inventario.eliminarProducto(codigo);
    limpiar();
}