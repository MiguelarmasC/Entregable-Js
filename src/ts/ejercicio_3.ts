const form = document.getElementById('form') as HTMLFormElement;
let lista = document.getElementById('lista') as HTMLUListElement;
let tarea = document.getElementById('tarea') as HTMLInputElement;


function añadirTarea(){
    let newLi = document.createElement('li');
    newLi.innerHTML = `${tarea.value} <button class="eliminar">Eliminar tarea</button>`;
    lista?.appendChild(newLi);
}

function eliminarTarea(tarea : HTMLElement){
    lista.removeChild(tarea);
}

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if(tarea.value.trim()){
        añadirTarea();
        form.reset();
    } 
})

lista.addEventListener('click', (e) =>{
    let targetEliminar = e.target as HTMLElement;
    let liPadre = targetEliminar?.closest('li') as HTMLElement;
    eliminarTarea(liPadre);
})
