const btnChangeColor = document.getElementById('btn-changeColor');

function cambiarColor(){
    let red: number = (255 * Math.random());
    let blue: number = (255 * Math.random());
    let green: number = (255 * Math.random());

    let randomColorRgb: string = `${red}, ${blue}, ${green}`;
    return randomColorRgb;
}

if(btnChangeColor){
    btnChangeColor.addEventListener('click', (e) =>{
        e.preventDefault();
        let colorRandon = cambiarColor();
        document.body.style.backgroundColor= `rgb(${colorRandon})`;
    })
}
