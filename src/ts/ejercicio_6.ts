let horas : number = 0;
let mins : number = 0;
let seg : number = 0;
let miniSeg : number = 0;
var tiempo : number = 0;
const spHoras = document.getElementById('horas') as HTMLSpanElement;
const spMins = document.getElementById('mins') as HTMLSpanElement;
const spSeg = document.getElementById('seg') as HTMLSpanElement;
const btnInicio = document.getElementById('iniciar') as HTMLButtonElement;
const btnPausa = document.getElementById('pausar') as HTMLButtonElement;
const btnReinicio = document.getElementById('reiniciar') as HTMLButtonElement;

function iniciarTiempo(){
    miniSeg++
    if(miniSeg === 100){
        miniSeg = 0
        seg++
    }else if(seg === 60){
        seg = 0;
        mins++
    }else if(mins === 60){
        mins = 0;
        horas++
    }
    actualiarTiempoDom();
}

function pausarTiempo(tiempo : number){
    clearInterval(tiempo)
}

function reiniciarTiempo(){
    miniSeg = 0;
    seg = 0;
    mins = 0;
    horas = 0;
    actualiarTiempoDom();
}

function actualiarTiempoDom(){
    spSeg.textContent = `0${seg}`;
    spMins.textContent = `0${mins}:`;
    spHoras.textContent = `0${horas}:`;
    if(seg > 9){
        spSeg.textContent = `${seg}`;
    }
    if(mins > 9){
        spMins.textContent = `${mins}:`;
    }
    if(horas > 9){
        spHoras.textContent = `${horas}:`;
    }
}

actualiarTiempoDom();

btnInicio.addEventListener('click', () =>{
    tiempo = setInterval(iniciarTiempo, 10);
    actualiarTiempoDom();
    btnInicio.disabled = true;
})

btnPausa.addEventListener('click', () =>{
    if(tiempo !== 0){
        pausarTiempo(tiempo);
        btnInicio.disabled = false;
    }
})

btnReinicio.addEventListener('click', () =>{
    if(tiempo !== 0){
        pausarTiempo(tiempo);
        reiniciarTiempo();
        btnInicio.disabled = false;
    }
})