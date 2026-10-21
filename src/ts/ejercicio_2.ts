const btnClics = document.getElementById('btnClicks');
let contador = document.getElementById('contador');
let clicks: number = 0;

if(contador){
    contador.innerText = clicks.toString();
}

function contarClicks(){
    clicks += 1;
    if(contador){
        contador.innerText = clicks.toString();
        return contador;
    }
}

btnClics?.addEventListener('click', (e) => {
    e.preventDefault();
    contarClicks();
})