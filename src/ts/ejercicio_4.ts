let inputFiltro = document.getElementById('filtro') as HTMLInputElement;
let elementosLi = document.getElementsByTagName('li') as HTMLCollectionOf<HTMLLIElement>;
const valoresLi = Array.from(elementosLi).map(elemento => elemento.textContent.toLocaleLowerCase());

function filtrarContenido(palabra: string){
    const animal = valoresLi.filter( valor => {
       return valor.toLocaleLowerCase().includes(palabra)
    })
    let elemento = Array.from(elementosLi);
    
    elemento.forEach((element =>{
        if(element.textContent.toLocaleLowerCase().includes(palabra)){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
        
    }))
    return animal
}

inputFiltro.addEventListener('input', (e) =>{
    e.preventDefault();
    let palabra: string = inputFiltro.value.toLocaleLowerCase();
    filtrarContenido(palabra);
})


