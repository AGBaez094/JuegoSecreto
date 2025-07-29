alert('Bienvenido al juego del número secreto');
/*let es para declaracion de variables seguido de camelcase , minuscula seguido de may*/
alert ('Indicame un rango para poder jugar a continuacion');
let rangoUno = parseInt(prompt('Numero inicial: '));
let rangoDos = parseInt(prompt('Numero final: '));
let numeroSecreto = Math.floor(Math.random()*(rangoDos-rangoUno))+rangoUno;
//0 es diferente de 4
let numeroUsuario = 0;
//contador, se inicializa en 1
let intentos = 1;
//para decir vez, veces
//let palabraVeces = 'vez';

let maximosIntentos = 3;


console.log(numeroSecreto);
//loop, bucle, mientras
while (numeroSecreto != numeroUsuario){
    //Agrega un console.log para verificar el valor de "numeroUsuario" despues de la entrada del usuario
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${rangoUno} y ${rangoDos} por favor:`));

    console.log('Valor de intento:', numeroUsuario);
    /* alert('Hola Mundo'); en parentesis va parametros... siempre se pueden usar comillas simples o dobles*/

    console.log(typeof(numeroUsuario));

    /* Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto) {
        //acertamos, fue verdadera la condicion                            Operador ternario (si intentos es igual a uno? dira vez, si no veces)
        alert(`acertaste, el numero es : ${numeroUsuario}. Lo hiciste en ${intentos}  ${intentos == 1? 'vez' : 'veces'}`);


    } else{
        if (numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        
        //incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos +=1;
        intentos ++;
        palabraVeces = 'veces';
        if(intentos > maximosIntentos){
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            //ruptura forzada
            break;
        }
        //la condicion no se cumplio
            //console.log('El numero secreto era: ' + numeroSecreto);
            //alert ('lo siento, no acertaste el numero');    
        }
        
    }










    /*let palabraPersona = prompt("Me puedes decir cuantas personas son?");
    alert (`Mesa reservada para: ${palabraPersona} ${palabraPersona == 1 ? 'persona' : 'personas'}`);*/

/* CASO PRACTICO
let contraseniaDelSistema = String ("contraseniaPrueba!");
let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}*/

/*DESAFIO 1*/
/*alert('Bienvenida y bienvenido a nuestro sitio web');*/

/* let nombre = String ("Lua"); */
/*let nombre = prompt("su nombre de usuario");
let edad = prompt("ingresa tu edad:");
let edadf = 18;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = ("¡Error! Completa todos los campos")
alert (mensajeDeError);

if (edad >= 18 ) {
    alert ("¡Puedes obtener tu licencia de conducir!");
}*/

