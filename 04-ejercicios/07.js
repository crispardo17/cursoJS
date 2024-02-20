let resultado = precioCompleto(19.90, 0.15)

function precioCompleto(precio, impuesto){
    return precio + precio * impuesto;
}

console.log(resultado);