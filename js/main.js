//? Prueba de Pre Entrega

//? Este proyecto de pre-entrega sera un proyecto enfocado en una agencia de marketing que propone los servicios/planes de acuerdo a las exigencias del cliente.


// let nombre = `agus`;
// let apellido = `muniz`;
// let nombreCompleto = nombre + " " + apellido;
// let edad = 27;

// console.log(nombreCompleto, String(edad));`

// let saludo = "Hola";
// let nombre = prompt("Ingresá tu nombre");
// let saludoCompleto = saludo + " " + nombre;

// console.log(saludoCompleto);

let nombre = prompt("¿Cuál es tu nombre?");
alert(`Hola, ${nombre}.`);

const anioUsuario = prompt(`¿En qué año naciste?`);
const anioActual = 2024;
let edadUsuario = anioActual - anioUsuario;
alert(`Tu nombre es ${nombre} y tienes ${edadUsuario} años.`);

let comercioOk = prompt("¿Tienes un comercio/negocio? (Responde 'SI' o 'NO')");

if (comercioOk.toUpperCase() === 'SI') {
    let seleccionPlan = prompt("Excelente. ¿Qué plan de marketing te interesa?\n1. Plan Básico ($1000)\n2. Plan Avanzado ($2500)\n3. Plan Premium ($3000)\nEscribe el número del plan:");
    
    switch (seleccionPlan) {
        case '1':
            console.log("Has seleccionado el Plan Básico. El valor es de $1000.");
            alert("Has seleccionado el Plan Básico. El valor es de $1000.");
            break;
        case '2':
            console.log("Has seleccionado el Plan Avanzado. El valor es de $2500.");
            alert("Has seleccionado el Plan Avanzado. El valor es de $2500.");
            break;
        case '3':
            console.log("Has seleccionado el Plan Premium. El valor es de $3000.");
            alert("Has seleccionado el Plan Premium. El valor es de $3000.");
            break;
        default:
            console.log("No has seleccionado un plan válido.");
            alert("No has seleccionado un plan válido.");
            break;
    }
} else if (comercioOk.toUpperCase() === 'NO') {
    console.log("Lo siento, parece que no podemos ayudarte si no tienes un negocio.");
    alert("Lo siento, parece que no podemos ayudarte si no tienes un negocio.");
} else {
    console.log("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
    alert("No entendí tu respuesta. Por favor, responde 'SI' o 'NO'.");
}
