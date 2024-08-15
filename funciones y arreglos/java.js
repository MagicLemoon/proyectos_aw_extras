function crearCajas() {
    const numCajas = parseInt(document.getElementById('numCajas').value);
    const contenedor = document.getElementById('contenedorCajas');
    contenedor.innerHTML = '';

    if (numCajas < 8) {
        contenedor.className = 'vertical';
    } else {
        contenedor.className = 'horizontal';
    }

    for (let i = 1; i <= numCajas; i++) {
        const caja = document.createElement('div');
        caja.className = 'article';
        caja.textContent = `Caja ${i}`;
        contenedor.appendChild(caja);
    }
}

function emitirVoto() {
    const seccion = document.getElementById('seccion').value;
    let mensaje;

    switch (seccion) {
        case 'norte':
            mensaje = 'Votaste por la sección Norte.';
            break;
        case 'sur':
            mensaje = 'Votaste por la sección Sur.';
            break;
        case 'centro':
            mensaje = 'Votaste por la sección Centro.';
            break;
        default:
            mensaje = 'No has seleccionado ninguna sección.';
    }

    document.getElementById('resultadoVoto').innerText = mensaje;
}

function sumarNumeros() {
    let suma = 0;
    let numero;

    do {
        numero = parseInt(prompt('Introduce un número positivo (o un número negativo o cero para terminar):'));
        if (numero > 0) {
            suma += numero;
        }
    } while (numero > 0);

    document.getElementById('resultadoSuma').innerText = `La suma total es: ${suma}`;
}


function ordenarNumeros() {
    let numeros = [];

    for (let i = 0; i < 3; i++) {
        numeros.push(parseInt(prompt(`Introduce el número ${i + 1}:`)));
    }

    numeros.sort((a, b) => b - a);

    document.getElementById('resultadoOrden').innerText = `Números de mayor a menor: ${numeros.join(', ')}`;
}


function calcularImporte() {
    const importeBruto = parseFloat(prompt('Introduce el importe bruto:'));
    let impuesto;

    if (importeBruto > 15000) {
        impuesto = 0.16;
    } else {
        impuesto = 0.10;
    }

    const importeNeto = importeBruto * (1 - impuesto);
    document.getElementById('resultadoImporte').innerText = `El importe neto es: ${importeNeto.toFixed(2)} euros.`;
}


function calcularSueldo() {
    const sueldoBase = 40000;
    const antiguedad = parseInt(prompt('Introduce tus años de antigüedad en la empresa:'));
    let aumento;

    if (antiguedad > 10) {
        aumento = 0.10;
    } else if (antiguedad > 5) {
        aumento = 0.07;
    } else if (antiguedad > 3) {
        aumento = 0.05;
    } else {
        aumento = 0.03;
    }

    const sueldoFinal = sueldoBase * (1 + aumento);
    document.getElementById('resultadoSueldo').innerText = `El sueldo final es: ${sueldoFinal.toFixed(2)} euros.`;
}


function sumarImpares() {
    let suma = 0;

    for (let i = 1; i <= 100; i += 2) {
        suma += i;
    }

    document.getElementById('resultadoImpares').innerText = `La suma de los números impares del 1 al 100 es: ${suma}`;
}


function mostrarAsteriscos() {
    const num = parseInt(prompt('Introduce un número:'));
    let asteriscos = '';

    for (let i = 0; i < num; i++) {
        asteriscos += '*';
    }

    document.getElementById('resultadoAsteriscos').innerText = asteriscos;
}


function mostrarTablas() {
    let tablas = '';

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            tablas += `${i} x ${j} = ${i * j}\n`;
        }
        tablas += '\n';
    }

    document.getElementById('resultadoTablas').innerText = tablas;
}


function toggleFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.style.display = formulario.style.display === 'none' ? 'block' : 'none';
}