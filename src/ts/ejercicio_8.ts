let palabras = document.getElementById('palabras') as HTMLSpanElement;
let carcteres = document.getElementById('caracteres') as HTMLSpanElement;
let texto = document.getElementById('texto') as HTMLTextAreaElement;
let form = document.getElementById('formContainer') as HTMLFormElement;

palabras.textContent = '0';
carcteres.textContent = '0';

function actualizarDom(contadorP : number, contadorC : number){
    palabras.textContent = `${contadorP}`;
    carcteres.textContent = `${contadorC}`;
}

function contarCaracteres(){
    let caracter = texto.value.split(' ').join('');
    let contador : number = caracter.length;
    console.log(caracter, contador);
    return contador;
}

function contarPalabras(){
    let textoArray = texto.value.split(' ');
    let eliminar = '';
    let newArray = textoArray.filter(palabra => palabra !== eliminar);
    let contador = newArray.length;
    return contador;
}

form.addEventListener('input', () =>{
    if(texto.value){
        let cuentaPalabras = contarPalabras();
        let cuentaCaracteres = contarCaracteres();
        actualizarDom(cuentaPalabras, cuentaCaracteres);
    }
})