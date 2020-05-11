/*El flujo del programa debería ser el siguiente:
   1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
   2. Mostrarle los productos en promoción (2 productos)
   3. Preguntarle si quiere comprar el producto 1.
      a. Si acepta preguntar cuántas unidades va a llevar
   4. Preguntarle si quiere comprar el producto 2.
      a. Si acepta preguntar cuántas unidades va a llevar
   5. Si no quiere llevar ningún producto, terminar el programa y mostrar un saludo de despedida   
   6. Si lleva alguno, mostrar el detalle de la compra con:
      - subtotales de cada producto (precio x cantidad) 
      - total (suma de subtotales)
   7. Preguntar si desea abonar con tarjeta de crédito
      a. Si acepta preguntar en cuántas cuotas desea abonar
        - Sólo puede pagar en 3, 6 o 12 cuotas
        - Si ingresa un número equivocado, debe continuar el programa como si no utilizara tarjeta de crédito
        - 3 cuotas tiene un interés de 5%, 6 de 10% y 12 de 25%
   8. Mostrar el detalle de la compra con:
      - subtotales de cada producto (precio x cantidad) 
      - total (suma de subtotales)
      - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
   9. Preguntar si tiene un código de descuento
      - si dice que sí, pedir que ingrese el código
      - mostrar si el código ingresado es correcto o incorrecto
   10. Mostrar el detalle de la compra con:
      - subtotales de cada producto (precio x cantidad) 
      - total (suma de subtotales)
      - si tiene código y lo ingresó bien, mostrar el descuento y el total final
      - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
   11. Mostrar un saludo de despedida     

❗ Se requiere definir variables para los siguientes valores (para poder utilizarlas luego)*/

/*1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta*/
const nombreTienda = "AdaTienda";
const nombreClienta = prompt(`Bienvenid@ a ${nombreTienda}. Ingrese su nombre:`); 
const nombreProducto1 = "Curso FrontEnd";
const nombreProducto2 = "Curso Backend";
let cantidadProducto1 ;
let cantidadProducto2 ;
const precioProducto1 = 2000;
const precioProducto2 = 3500;
const codigoDescuento = "ADAONLINE20";
const valorDescuento = 300;
let totalCompra1 ;
let totalCompra2 ;
let totalDosCompras ;
let abonarConTarjeta ;
let cantidadCuotas ;
let totalAbonarCuotas ;

/*2. Mostrarle los productos en promoción (2 productos)*/
alert(`Hola ${nombreClienta}! Tenemos dos productos en promoción:
- ${nombreProducto1} por $${precioProducto1}
- ${nombreProducto2} por $${precioProducto2}`);

/* 3. Preguntarle si quiere comprar el producto 1.*/
const quiereProducto1 = prompt(`Te interesa comprar el ${nombreProducto1}? Responde por favor con SI o con NO`);

if (quiereProducto1 === "SI") { 
    cantidadProducto1 = prompt("Cuántas unidades te gustaría comprar? Indicalo por favor con un número");
}

const quiereProducto2 = prompt(`Te interesa comprar el ${nombreProducto2}? Responde por favor con SI o con NO`);

if (quiereProducto2 === "SI") { 
    cantidadProducto2 = prompt("Cuántas unidades te gustaría comprar? Indicalo por favor con un número");
}

if (quiereProducto1 !== "NO" || quiereProducto2 !== "NO") { 
    if (quiereProducto1 === "SI" && quiereProducto2 === "NO") { 
    totalCompra1 = precioProducto1 * cantidadProducto1;
    alert(`Vas a comprar ${cantidadProducto1} unidades de ${nombreProducto1}. El total de tu compra es ${totalCompra1}`);
} else if (quiereProducto1 ==="NO" && quiereProducto2 ==="SI") {
    totalCompra2 = precioProducto2 * cantidadProducto2;
    alert(`Vas a comprar ${cantidadProducto2} unidades de ${nombreProducto2}. El total de tu compra es ${totalCompra2}`);
} else if (quiereProducto1 ==="SI" && quiereProducto2 ==="SI") {
    totalCompra1 = precioProducto1 * cantidadProducto1;
    totalCompra2 = precioProducto2 * cantidadProducto2;
    totalDosCompras = totalCompra1 + totalCompra2;

    alert(`Vas a comprar ${cantidadProducto1} unidades de ${nombreProducto1} y ${cantidadProducto2} unidades de ${nombreProducto2}. 
    El total de tu compra es ${totalDosCompras}`);
} 
abonarConTarjeta = confirm("Desea abonar con tarjeta de crédito?")
/*let abonarEnCuotas = abonarConTarjeta ? "Perfecto! Puedes pagar en 3, 6 o 12 cuotas" : "Estupendo. Procederemos ahora al checkout.";*/

if (abonarConTarjeta = true) {
    cantidadCuotas = prompt("Puedes abonar en 3, 6 y 12 cuotas. Indicanos por favor el número de cuotas en que te gustaría abonar");
    let cantidadCuotasNumber = parseInt(cantidadCuotas);

    if (cantidadCuotasNumber === 3 || cantidadCuotasNumber === 6 || cantidadCuotasNumber === 12) {
        totalAbonarCuotas = totalDosCompras / cantidadCuotas;
        alert(`Perfecto! Abonarás ${cantidadCuotas} cuotas de ${totalAbonarCuotas} cada una`); 
    } else {
        alert("Perfecto! Procederemos ahora al checkout");
    }

}


/* 5. Si no quiere llevar ningún producto, terminar el programa y mostrar un saludo de despedida*/
} else {
    alert(`Gracias por visitarnos, que tengas un lindo día`);
   }





