const form = document.getElementById('generador') as HTMLFormElement;
const input = document.getElementById('tamaño') as HTMLInputElement;
let span = document.getElementById('contraseña') as HTMLSpanElement;

const letras : Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeros : Array<string> = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const caracterEspecial : Array<string> = ["!", "@", "#", "$", "%", "&", "*", "-", "_", "=", "+", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|"];

/* Primera version del generador de contraseñas.
function generarContraseña(longitud : number) : string{
    let contraseña : string = '';
    let aleatorio : Array<string> = [];
    if(longitud){
        for (let i = 0; i < longitud; i++){
            let letraAleatoria = Math.floor(Math.random() *26);
            let especialAleatorio = Math.floor(Math.random() *22);
            let numeroAleatorio = Math.floor(Math.random() *10);
            let ramdomArray = [letras[letraAleatoria],letras[letraAleatoria].toLocaleUpperCase(), numeros[numeroAleatorio], caracterEspecial[especialAleatorio]];
            let ramdom = Math.floor(Math.random() *4);
            aleatorio.push(ramdomArray[ramdom]);
            contraseña = aleatorio.join("");
        }
    }
    return contraseña;
}
*/

/*Obtimizacion de la 1era versión, se utiliza la variable ramdom para decidir
aleatoriamente que valor añadir, de esta manera solo se calcula el valor aleatorio
que se va a usar.*/ 
/*
function generarContraseña2(longitud : number) : string{
    let contraseña : string = '';
    let aleatorio : Array<string> = [];
    if(longitud){
        for(let i = 0; i < longitud; i++){
            let ramdom = Math.floor(Math.random() *4);
            if(ramdom === 0){
                let letraAleatoria = Math.floor(Math.random() * letras.length);
                aleatorio.push(letras[letraAleatoria]);
            }else if(ramdom === 1){
                let letraAleatoria = Math.floor(Math.random() * letras.length);
                aleatorio.push(letras[letraAleatoria].toLocaleUpperCase());
            }else if(ramdom === 2){
                let numeroAleatorio = Math.floor(Math.random() * numeros.length);
                aleatorio.push(numeros[numeroAleatorio]);
            }else{
                let especialAleatorio = Math.floor(Math.random() * caracterEspecial.length);
                aleatorio.push(caracterEspecial[especialAleatorio]);
            }
        }
        contraseña = aleatorio.join("");
        console.log(aleatorio);
    }
    return contraseña;
}*/

//Obtimizacion final, se crea un array con todos lo elementos a utilizar 
// y apartir del valor de random se selecciona el elemento aleatoriamente.
function generarContraseña3(longitud : number) : string{
    let contraseña : string = '';
    let aleatorio : Array<string> = [];
    let arrayMixto = [...letras, ...numeros, ...letras.map(l => l.toLocaleUpperCase()), ...caracterEspecial];
    if(longitud){
        for(let i = 0; i < longitud; i++){
            let ramdom = Math.floor(Math.random() * arrayMixto.length);
            aleatorio.push(arrayMixto[ramdom]);
        }
        contraseña = aleatorio.join("");
    }
    return contraseña;
}

function visualizar(cadena : string){
    if (cadena.includes(' ')){
        span.innerHTML = `<p>${cadena}</p>`;
    }else{
       span.innerHTML = `<p>Tu contraseña es: ${cadena}</p>`; 
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if((input.value) && (Number(input.value) > 3)){
        let tamaño : number = Number(input.value);
        let contraseña = generarContraseña3(tamaño);
        visualizar(contraseña);
        form.reset();
    }else{
        let error : string = 'La longitud debe ser mayor o igual a 4 para generar una contraseña';
        visualizar(error);
    }
})


