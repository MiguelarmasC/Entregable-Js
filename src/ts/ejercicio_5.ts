let input1 = document.getElementById('valor1') as HTMLInputElement;
let input2 = document.getElementById('valor2') as HTMLInputElement;
let resultado =  document.getElementById('resultado') as HTMLSpanElement;
const form = document.getElementById('calculadora') as HTMLFormElement;

function sumarNumeros(num : number , num2: number): number{
    let suma : number = num + num2;
    return suma;
}

function restarNumeros(num : number , num2: number): number{
    let resta : number = num - num2;
    return resta;
}

function multiNumeros(num : number , num2: number): number{
    let multi : number = num * num2;
    return multi;
}

function dividirNumeros(num : number , num2: number): number{
    let dividir : number = num / num2;
    return dividir;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (input1.value && input2.value){
        let valor1 = Number(input1.value);
        let valor2 = Number(input2.value);
        if(e.submitter){
            let buttonTarget = e.submitter as HTMLButtonElement;
            switch(buttonTarget.id){
                case 'sumar': 
                    let suma = sumarNumeros(valor1, valor2);
                    resultado.innerText = `El resultado es: ${suma}`;
                    form.reset();
                break;
                case 'restar': 
                    let resta = restarNumeros(valor1, valor2);
                    resultado.innerText = `El resultado es: ${resta}`;
                    form.reset();
                    break;
                case 'multiplicar': 
                    let multi = multiNumeros(valor1, valor2);
                    resultado.innerText = `El resultado es: ${multi}`;
                    form.reset();
                break;
                case 'dividir': 
                    if(valor2 > 0){
                        let dividir = dividirNumeros(valor1, valor2);
                        resultado.innerText = `El resultado es: ${dividir}`;
                        form.reset();
                    }else{
                        resultado.textContent = 'No es posible dividir entre "0"';
                    }
                break;
            }
        }
    }
})

