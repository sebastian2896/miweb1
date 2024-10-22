class tarea{
    // numeros
 // numeros
  
 regresarAlMenuNumeros() {
    window.location.href = 'menu_numeros.html'; // Reemplaza con la ruta correcta
}

regresarAlMenuArreglos() {
    window.location.href = 'menu_arreglos.html';
}
regresarAlMenucadena(){
    window.location.href ='menu_cadenas.html'
}

//ejercicio1
calcularSuma() {
    let resultadoSuma = document.getElementById('resultadoSuma');
    resultadoSuma.innerHTML = '';

    let suma = 0;
    let explicacion = 'La suma de los números del 1 al 10 se calcula así:<br>';
    for (let i = 1; i <= 10; i++) {
        suma += i;
        if (i < 10) {
            explicacion += i + ' + ' + suma + '<br>';
        } else {
            explicacion += i + ' = ' + suma + '<br>';
        }
    }
    explicacion += 'Este bucle suma los números del 1 al 10 y almacena el resultado en la variable suma.';
    resultadoSuma.innerHTML = explicacion;
}


//ejercicio 2
contaPares(){
    let resultadoPar = document.getElementById('resultadoPar')
    resultadoPar.innerHTML = ''
    let i = 0;
    let contador = 0;
    while (i <= 10) {
     if (i % 2 === 0) {
     contador++;
         }
       i++;
     }
   resultadoPar.innerHTML= `Hay ${contador} Pares. La variable  i empieza en 0 y va en aumento haasta el 10 la condicion verifica que el numero sea par y si es par lo mete en la varible contador`;
}

//ejercicio 3

determinarParImpar(){
    let numero = document.getElementById('num').value;
    numero = parseInt(numero);
    let resultado = document.getElementById('resultadoParImpar');
    resultado.innerHTML = '';

    let explicacion = 'Para determinar si un número es par o impar se hace así:<br>';

    if (numero % 2 == 0) {
        explicacion += numero + ' es un número par.<br>';
    } else {
        explicacion += numero + ' es un número impar.<br>';
    }

    explicacion += 'Este código verifica si un número es par o impar y muestra el resultado.';
    resultado.innerHTML = explicacion;
}
//ejercicio 4
mayorEdad(){
    let edad = document.getElementById('edad').value
    edad = parseInt(edad)
    let resp = document.getElementById('resp')
    resp.innerHTML = ''
    let explicacion
    if(edad >=18){
        explicacion = 'La edad  al cumplir la condicion es mayor de edad'
    }
    else{
        explicacion = 'La edad al cumplir no la condicion no es mayor de edad'
    }
    resp.innerHTML = explicacion
}

//ejercicio 5
posNegCero(){
    let numero = document.getElementById('num').value;
    numero = parseInt(numero);
    let resultado = document.getElementById('resultadoPosNegCero');
    resultado.innerHTML = '';

    let explicacion = 'Para determinar si un número es positivo, negativo o cero se hace así:<br>';

    if (numero > 0) {
        explicacion += numero + ' es un número positivo.<br>';
    } else if (numero < 0) {
        explicacion += numero + ' es un número negativo.<br>';
    } else {
        explicacion += numero + ' es cero.<br>';
    }

    explicacion += 'Este código verifica si un número es positivo, negativo o cero y muestra el resultado.';
    resultado.innerHTML = explicacion;
}
//ejercicio 6
añoBisiesto(){
    let año = document.getElementById('año').value
    año = parseInt(año)
    let resultadoAño = document.getElementById('resultadoAño')
    resultadoAño.innerHTML = ''
    let explicacion
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
     explicacion = 'Si es bisiesto porque el numero del año al cumplir la condicion de ser divisible para 4 y 400 pero no a 100';
    } 
    else {
        explicacion = 'No es bisiesto porque el numero del año no cumple la condicion';
    }
    resultadoAño.innerHTML = explicacion
}
//ejercicio 7

mayorDosNumeros(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    let resultado = document.getElementById('resultadoMayorDosNumeros');
    resultado.innerHTML = '';

    let explicacion = 'Para determinar el mayor de dos números se hace así:<br>';

    if (numero1 > numero2) {
        explicacion += numero1 + ' es mayor que ' + numero2 + '.<br>';
    } else if (numero1 < numero2) {
        explicacion += numero2 + ' es mayor que ' + numero1 + '.<br>';
    } else {
        explicacion += 'Los números son iguales.<br>';
    }

    explicacion += 'Este código verifica cuál de los dos números es mayor y muestra el resultado.';
    resultado.innerHTML = explicacion;
}
//ejercicio 8
ParesN(){
    let num = document.getElementById('num').value;
    num = parseInt(num)
    let respAr = document.getElementById('respAr');
    respAr.innerHTML = ''
    let explicacion = ''
    for(let i = 1; i<=num ; i++){
        if(i % 2 === 0){
            explicacion +=  i + ' '
         }
    }
    explicacion += 'Son pares. En este codigo verificamos los numeros pares que hay dentro cierta cantidad de numeros'
    respAr.innerHTML = explicacion
}
//ejercicio 9
presentarDivisores(){
    let numero = document.getElementById('num').value;
    numero = parseInt(numero);
    let resultado = document.getElementById('resultadoDivisores');
    resultado.innerHTML = '';

    let explicacion = 'Los divisores de un número se presentan así:<br>';

    for(let i = 1; i <= numero; i++) {
        if(numero % i === 0) {
            explicacion += i + ' es un divisor de ' + numero + '.<br>';
        }
    }

    explicacion += 'Este código verifica todos los números hasta el número dado y muestra los que son divisores.';
    resultado.innerHTML = explicacion;
}
//ejercicio 10
Perfecto(){
    let numero = document.getElementById('numero').value;
    numero = parseInt(numero)
    let suma = 0;
    let explicacion = ''
    let resp = document.getElementById('resp')
    resp.innerHTML = ''
    for (let i = 1; i < numero; i++) {
     if (numero % i === 0) {
     suma += i
     }
    }
 if (suma === numero) {
 explicacion = numero +' es perfecto'
 } else {
 explicacion = numero + " no es un número perfecto";
 }
 explicacion += ' Un número es perfecto si es igual a la suma de sus divisores propios excluyendo el propio número'
 resp.innerHTML = explicacion
}

//ejercicio11
esPrimo() {
    let numero = document.getElementById('num').value;
    numero = parseInt(numero);
    let resultado = document.getElementById('resultadoEsPrimo');
    resultado.innerHTML = '';

    let explicacion = 'Para verificar si un número es primo se hace así:<br>';
    let esPrimo = true;

    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if(esPrimo) {
        explicacion += numero + ' es un número primo.<br>';
    } else {
        explicacion += numero + ' no es un número primo.<br>';
    }

    explicacion += 'Este código verifica si un número es primo y muestra el resultado.';
    resultado.innerHTML = explicacion;
}
//ejercicio12
invertido(){
    let numero = document.getElementById('numero').value;
    let invertido = 0;
    let resp = document.getElementById('resp')
    resp.innerHTML = ''
    while (numero !== 0) {
     let digito = numero % 10;
     invertido = invertido * 10 + digito;
     numero = Math.floor(numero / 10);
    }
 resp.innerHTML = invertido;
}
//ejercicio13
multiplicacionSumas(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    let resultado = document.getElementById('resultadoMultiplicacionSumas');
    resultado.innerHTML = '';

    let explicacion = 'La multiplicación de dos números por sumas sucesivas se hace así:<br>';
    let multiplicacion = 0;

    for(let i = 0; i < numero2; i++) {
        multiplicacion += numero1;
    }

    explicacion += 'El resultado de la multiplicación de ' + numero1 + ' y ' + numero2 + ' es ' + multiplicacion + '.<br>';

    explicacion += 'Este código realiza la multiplicación de dos números mediante sumas sucesivas y muestra el resultado.';
    resultado.innerHTML = explicacion;
}
//ejercicio14
DivisionSucesiva(){
 let dividendo = document.getElementById('dividendo').value;
 let divisor = document.getElementById('divisor').value;
 dividendo = parseInt(dividendo);
 divisor = parseInt(divisor);

 let resp = document.getElementById('resp');
 resp.innerHTML = '';
 let explicacion = 'La division sucesiva se hace asi: ' + '<br>'

 let cociente = 0;

 while (dividendo >= divisor) {
 dividendo -= divisor;
 cociente++;
 explicacion += dividendo+ ' / ' +divisor+ ' = '+ cociente + ' ('+dividendo+ ' - ' +divisor+ ' = '+ cociente +')'+'.<br>'
}
explicacion += `Este codigo divide resstando el divisor del dividendo: `;
 resp.innerHTML = explicacion
}
//ejercicio15
fibonacci() {
    let n = document.getElementById('num').value;
    n = parseInt(n);
    let resultado = document.getElementById('resultadoFibonacci');
    resultado.innerHTML = '';

    let a = 0;
    let b = 1;
    let explicacion = 'La serie de Fibonacci de ' + n + ' números se presenta así:<br>';

    explicacion += a + ', ' + b; // Agregamos los dos primeros números

    for(let i = 2; i < n; i++) {
        let c = a + b;
        explicacion += ', ' + c;
        a = b;
        b = c;
    }

    explicacion += '.<br>Este código genera la serie de Fibonacci de ' + n + ' números y muestra el resultado.';
    resultado.innerHTML = explicacion;
}
//USO DE ARREGLOS
//ejercicio 1
multiplosDeCinco() {
    let num = document.getElementById("numeros").value;
    let arraynum = num.split(",").map(Number);
    let resultadoHTML = "";
    for(let i = 0; i < arraynum.length; i++){
        if(arraynum[i] % 5 === 0){
            resultadoHTML += arraynum[i] + " ";
        }
    }
    document.getElementById("resultadoMultiplos").innerHTML = "Los múltiplos de 5 en el arreglo son: " + resultadoHTML;
}

//ejercicio 2
PromedioArray(){
    let num = document.getElementById("num").value;
    let arraynum = num.split(",").map(Number);
    let resp = "";
    let suma = 0
    for(let i = 0; i < arraynum.length; i++){
        suma += arraynum[i]
    }
    let promedio = suma / arraynum.length
    resp = document.getElementById("resp").innerHTML = "El promedio del arreglo es: " +promedio
}
//ejercicio 3
mayorNumero() {
   
    let num = document.getElementById("numeros").value;
    let numeros = num.split(",").map(Number);
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
     
            mayor = numeros[i];
        }
    }
    
    document.getElementById("resultadoMayorNumero").innerHTML = "El mayor número en el arreglo es: " + mayor;
}
//ejercicio 4
AnaNo(){
    let nombres = document.getElementById("nombres").value;
    let arrnomb =  nombres.split(",");
    let explicacion = "";
    let resp = "";
    for(let i = 0; i < arrnomb.length; i++){
        if(arrnomb[i].toLowerCase() !== "ana"){
            explicacion +=  arrnomb[i] + " "
        }
    }
    resp = document.getElementById("resp").innerHTML = "En este codigo usando un ciclo for iteramos todos los nombres del arreglo y eliminamos el nombre Ana mediante una condicion: "+ "<br>"+explicacion
}
//ejercicio 5
numerosPares() {
    let num = document.getElementById("numeros").value;
    let numeros = num.split(",").map(Number);
    let pares = "";
    for(let i = numeros.length - 1; i >= 0; i--) {
        if(numeros[i] % 2 === 0) {
            pares += numeros[i] + " ";
        }
    }

    document.getElementById("resultadoNumerosPares").innerHTML = "Los números pares en el arreglo, recorridos desde el último elemento al primer elemento, son: " + pares;
}
//cadena
//ejercicio 1

    imprimirCadena(){
        let cadena = document.getElementById("cadena").value;

        let resultado = '';
        for(let i = 0; i < cadena.length; i++) {
            resultado += cadena[i] + '<br>';
        }

        document.getElementById("resultadoCadena").innerHTML = resultado;
    }
  
        // Aquí va el código para regresar al menú de cadenas
    



//ejercicio 2
ContarVocales(){
    let cadena = document.getElementById("cadena").value;
    let resp = "";
    let vocales = "aeiouAEIOU";
    let contador = 0;
 for (let i = 0; i < cadena.length; i++) {
 for (let j = 0; j < vocales.length; j++) {
 if (cadena[i] === vocales[j]) {
 contador++;
 }
 }
 }
 resp= document.getElementById("resp").innerHTML=contador;
}
//ejercicio 3

invertirCadena() {
    let cadena = document.getElementById('cadena').value;
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    document.getElementById('resultado').innerHTML = 'Cadena invertida: ' + cadenaInvertida;
}
//ejercicio4
ContarPalabras(){
    let cadena = document.getElementById("cadena").value;
    let resp = document.getElementById("resp");
    let contadorPalabras = 1; // Asumimos que hay al menos una palabra
    for (let i = 0; i < cadena.length; i++) { 
     if (cadena[i] === " ") {
     contadorPalabras++;
      }
    }
 resp.innerHTML= contadorPalabras
}
//ejercicio5
reemplazarEspacios() {
    let cadena = document.getElementById('cadena').value;
    let cadenaModificada = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ") {
            cadenaModificada += "-";
        } else {
            cadenaModificada += cadena[i];
        }
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + cadenaModificada;
}
//ejercicio6
ContarCaracter(){
    let cadena = document.getElementById("cadena").value;
    let caracter = document.getElementById("caracter").value;
    let resp = document.getElementById("resp");
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
     contador++;
     }
    }
    resp.innerHTML= contador
}
//ejercicio7
eliminarCaracter() {
    let cadena = document.getElementById('cadena').value;
    let caracterAEliminar = document.getElementById('caracterAEliminar').value;
    let cadenaModificada = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== caracterAEliminar) {
            cadenaModificada += cadena[i];
        }
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + cadenaModificada;
}
//ejercicio8
MayusculaMinuscula(){
    let cadena = document.getElementById("cadena").value;
    let resp = document.getElementById("resp");
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
     let char = cadena[i];
     if (char >= 'a' && char <= 'z') {
     nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32);
     } else if (char >= 'A' && char <= 'Z') {
     nuevaCadena += String.fromCharCode(char.charCodeAt(0) + 32);
     } else {
     nuevaCadena += char;
     }
     }
    resp.innerHTML = nuevaCadena
}
//ejercicio9
eliminarEspacios() {
    let cadena = document.getElementById('cadena').value;
    let nuevacadena = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " ") {
            nuevacadena += cadena[i];
        }
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + nuevacadena;
}

//ejercicio10
LongitudMaxima(){
    let cadena = document.getElementById("cadena").value;
    let resp = document.getElementById("resp");
    let palabraActual = "";
    let longitudMaxima = 0;
    for (let i = 0; i < cadena.length; i++) {
     if (cadena[i] === " " || i === cadena.length - 1) {
     if (i === cadena.length - 1) {
     palabraActual += cadena[i];
     }
   if (palabraActual.length > longitudMaxima) {
     longitudMaxima = palabraActual.length;
    }
     palabraActual = "";
    } else {
    palabraActual += cadena[i];
    }
    }
 resp.innerHTML = longitudMaxima
}
}

let ope = new tarea()

