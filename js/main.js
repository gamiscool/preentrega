// //? Prueba de Pre Entrega

// //? Este proyecto de pre-entrega sera un proyecto enfocado en una agencia de marketing que propone los servicios/planes de acuerdo a las exigencias del cliente.


// // let nombre = `agus`;
// // let apellido = `muniz`;
// // let nombreCompleto = nombre + " " + apellido;
// // let edad = 27;

// // console.log(nombreCompleto, String(edad));`

// // let saludo = "Hola";
// // let nombre = prompt("Ingresá tu nombre");
// // let saludoCompleto = saludo + " " + nombre;

// // console.log(saludoCompleto);

// let nombre = prompt("¿Cuál es tu nombre?");
// alert(`Hola, ${nombre}.`);

// const anioUsuario = prompt(`¿En qué año naciste?`);
// const anioActual = 2024;
// let edadUsuario = anioActual - anioUsuario;
// alert(`Tu nombre es ${nombre} y tienes ${edadUsuario} años.`);

// let comercioOk = prompt("¿Tenés un comercio/negocio? (Responde 'SI' o 'NO')");

// if (comercioOk.toUpperCase() === 'SI') {
//     let tipoDeNegocio = prompt("Perfecto. ¿Qué tipo de negocio tenés?\n1. Negocio Grande\n2. Negocio mediano \n3. Negocio pequeño \nSeleccioná que tupo de negocio tenes:");
    
//     switch (tipoDeNegocio) {
//         case '1':
//             console.log("Seleccionaste el Plan Básico. El valor es de $1000.");
//             alert("Seleccionaste el Plan Básico. El valor es de $1000.");
//             break;
//         case '2':
//             console.log("Seleccionaste el Plan Avanzado. El valor es de $2500.");
//             alert("Seleccionaste el Plan Avanzado. El valor es de $2500.");
//             break;
//         case '3':
//             console.log("Seleccionaste el Plan Premium. El valor es de $3000.");
//             alert("Seleccionaste el Plan Premium. El valor es de $3000.");
//             break;
//         default:
//             console.log("No has seleccionado una opción válida.");
//             alert("No has seleccionado una opción válida.");
//             break;
//     }
// } else if (comercioOk.toUpperCase() === 'NO') {
//     console.log("Dale Vago, ponete un kiosko y volvé... (raton)");
//     alert("Dale Vago, ponete un kiosko y volvé... (raton)");
// } else {
//     console.log("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
//     alert("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
// }

// codigo actualizado

// Prueba de Pre Entrega: Agencia de Marketing

// Solicitar el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");
alert(`Hola, ${nombre}.`);

// Calcular la edad del usuario
const anioUsuario = prompt(`¿En qué año naciste?`);
const anioActual = 2024; // Asumiendo que este es el año actual para simplificar
let edadUsuario = anioActual - anioUsuario;
alert(`Tu nombre es ${nombre} y tienes ${edadUsuario} años.`);

// Preguntar si el usuario tiene un negocio
let comercioOk = prompt("¿Tienes un comercio/negocio? (Responde 'SI' o 'NO')");

if (comercioOk.toUpperCase() === 'SI') {
    // Preguntar el tipo de negocio
    let tipoDeNegocio = prompt("Perfecto. ¿Qué tipo de negocio tienes?\n1. Negocio Grande\n2. Negocio Mediano\n3. Negocio Chico\nSelecciona el tipo de negocio:");

    let tipoDeNegocioTexto;
    switch (tipoDeNegocio) {
        case '1':
            tipoDeNegocioTexto = "Negocio Grande";
            break;
        case '2':
            tipoDeNegocioTexto = "Negocio Mediano";
            break;
        case '3':
            tipoDeNegocioTexto = "Negocio Chico";
            break;
        default:
            tipoDeNegocioTexto = "opcion invalida";
            alert(tipoDeNegocioTexto);
            console.log(tipoDeNegocioTexto);
            break;
    }

    // Si la opción de negocio es valida, siguiente pregunta
    if (tipoDeNegocioTexto !== "opcion invalida") {
        // Preguntar a qué actividad se dedica el negocio
        let actividadNegocio = prompt("¿A qué se dedica tu negocio?");

        // Preguntar el tipo de ayuda de marketing que necesita
        let tipoDeAyuda = prompt("¿Qué tipo de ayuda de marketing necesitas para tu negocio?\n1. Página web\n2. Ayuda con redes sociales\n3. Anuncios en Google Ads\n4. Anuncios en Facebook\n5. Consultoría en marketing\nSelecciona el tipo de ayuda:");

        let tipoDeAyudaTexto;
        switch (tipoDeAyuda) {
            case '1':
                tipoDeAyudaTexto = "Página web";
                break;
            case '2':
                tipoDeAyudaTexto = "Ayuda con redes sociales";
                break;
            case '3':
                tipoDeAyudaTexto = "Anuncios en Google Ads";
                break;
            case '4':
                tipoDeAyudaTexto = "Anuncios en Facebook";
                break;
            case '5':
                tipoDeAyudaTexto = "Consultoría en marketing";
                break;
            default:
                tipoDeAyudaTexto = "opcion invalida";
                alert(tipoDeAyudaTexto);
                console.log(tipoDeAyudaTexto);
                break;
        }

        
        if (tipoDeAyudaTexto !== "Opción inválida") {
            if (tipoDeAyudaTexto === "Página web") {
                let tipoDePagina = prompt("¿Qué tipo de página web necesitas?\n1. Landing comercial ($1000)\n2. Sitio web común ($2000)\n3. Carrito de compras ($3000)\nSelecciona el tipo de página:");

                let precioPagina;
                switch (tipoDePagina) {
                    case '1':
                        precioPagina = 1000;
                        break;
                    case '2':
                        precioPagina = 2000;
                        break;
                    case '3':
                        precioPagina = 3000;
                        break;
                    default:
                        alert("opcion invalida");
                        console.log("opcion invalida");
                        precioPagina = 0;
                        break;
                }

                if (precioPagina > 0) {
                    alert(`Has seleccionado la opción con un precio de $${precioPagina}.`);
                    let potenciarConAnuncios = prompt("¿Deseas potenciar lo que has elegido con anuncios en Google? (Responde 'SI' o 'NO')");
                    
                    if (potenciarConAnuncios.toUpperCase() === 'SI') {
                        let productos = [];
                        for (let i = 0; i < 5; i++) {
                            let producto = prompt(`Ingresa el nombre del producto ${i+1} (o deja vacío para terminar):`);
                            if (producto) {
                                productos.push(producto);
                            } else {
                                break;
                            }
                        }

                        let expectativaVenta = prompt("¿Cuál es tu expectativa de ventas mensuales en dólares?");
                        expectativaVenta = parseFloat(expectativaVenta);

                        if (expectativaVenta > 10000) {
                            alert("Te recomendamos invertir $100,000 en anuncios para alcanzar tus expectativas de venta.");
                        }

                        console.log(`Productos: ${productos.join(", ")}`);
                        console.log(`Expectativa de venta: $${expectativaVenta}`);
                    }
                }
            } else {
                let mensajeFinal = `Tu nombre es ${nombre}, tienes ${edadUsuario} años, tienes un ${tipoDeNegocioTexto} que se dedica a ${actividadNegocio}, y necesitas ayuda con ${tipoDeAyudaTexto}.`;
                console.log(mensajeFinal);
                alert(mensajeFinal);
            }
        }
    }
} else if (comercioOk.toUpperCase() === 'NO') {
    console.log("Dale Vago, ponete un kiosko y volvé... (ratón)");
    alert("Dale Vago, ponete un kiosko y volvé... (ratón)");
} else {
    console.log("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
    alert("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
}

