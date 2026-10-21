const form = document.getElementById('form') as HTMLFormElement;
const lista = document.getElementById('lista') as HTMLUListElement;
const input = document.getElementById('tarea') as HTMLInputElement;
const resetBtn = document.getElementById('reset') as HTMLButtonElement;
const BtnDellCompleted = document.getElementById('checkedDelleter') as HTMLButtonElement;

let misLiCheckeds : Array<HTMLLIElement> = [];
let misTareas : Array<string> = [];
let checkeds : Array<string> = [];

function agregarTarea(tarea : string){
    let newLi = document.createElement('li');
    newLi.innerHTML = `<input type="checkbox" name="" class="checker"> <span>${tarea}</span> <button class="eliminar" >Eliminar</button>`;
    lista.appendChild(newLi);
    guardarTarea(tarea);
};

function actualizarLista(){
    //Actualiza las tareas si las hay desde la memorifa del localStorage.
    let tareasGuardadas = localStorage.getItem('Tareas');
    if(tareasGuardadas){
        misTareas = JSON.parse(tareasGuardadas)
        for (let i = 0; i < misTareas.length; i++){
            let tarea = misTareas[i];
            agregarTarea(tarea);
        }
    }
    //Actualiza las tareas completadas si las hay desde la memorifa del localStorage.
    let inputCheckeds = localStorage.getItem('Completadas');
    if(inputCheckeds){
        checkeds = JSON.parse(inputCheckeds)
        let listaLi = Array.from(lista.children);
        let listaTextos : Array<string> = [];
        let listaInputs : Array<HTMLInputElement> = [];
        for( let i = 0; i < listaLi.length; i++){
            listaTextos.push(listaLi[i].children[1].textContent);
            listaInputs.push(listaLi[i].children[0] as HTMLInputElement);
        }
        for (let i = 0; i < checkeds.length; i++){
            let check = checkeds[i];
            if(listaTextos.indexOf(check) !== -1){
                let indice = listaTextos.indexOf(check);
                listaInputs[indice].checked = true;
            }
        }
    }
};

function guardarTarea(tarea : string){
    if(!misTareas.includes(tarea)){
        misTareas.push(tarea);
        localStorage.setItem('Tareas', JSON.stringify(misTareas));
    }
};

function guardarCheckeds(checked : HTMLInputElement){
    let padre = checked.closest('li');
    let textoChildren = padre?.children[1].textContent;
    if(textoChildren){
        if(!checkeds.includes(textoChildren)){
            checkeds.push(textoChildren)
            localStorage.setItem('Completadas', JSON.stringify(checkeds));
        };
    }
};

function guardarLicheckeds(itemInput : HTMLInputElement){
    misLiCheckeds.push(itemInput.closest('li') as HTMLLIElement);
}

function eliminarCheckeds(desChecked : HTMLInputElement){
    let padre = desChecked.closest('li');
    let textoChildren = padre?.children[1].textContent;
    //Elimina la tarea desmarcada del array de tareas completadas.
    checkeds = checkeds.filter((texto) =>{
        return textoChildren !== texto
    });
    // Reescribe el array de tareas guardadas.
    localStorage.setItem('Completadas', JSON.stringify(checkeds));
};

function eliminarLiCheckeds(desChecked : HTMLInputElement){
    misLiCheckeds = misLiCheckeds.filter((itemLi) => {
        return  desChecked.closest('li') as HTMLLIElement !== itemLi
    });
};

function eliminarTarea(element : HTMLElement){
    //Elimina la tarea de la lista.
    lista.removeChild(element);
    // elimina el elemento de la lista de checked si esta cheched.
    misLiCheckeds = misLiCheckeds.filter((itemLi) => {
    return  element !== itemLi});
    //Elimina la tarea del localstorage.
    let tareasGuardadas = localStorage.getItem('Tareas');
    if(tareasGuardadas){
        misTareas = JSON.parse(tareasGuardadas)
        misTareas = misTareas.filter((stringItem) => {
            return element.children[1].textContent !== stringItem
        });
        localStorage.setItem('Tareas', JSON.stringify(misTareas));
    };
    //Elimina la tarea de completadas si esta en ella.
    if(checkeds.includes(element.children[1].textContent)){
        checkeds = checkeds.filter((stringItem) => {
            return element.children[1].textContent !== stringItem
        });
        // Reescribe el array de tareas guardadas.
        localStorage.setItem('Completadas', JSON.stringify(checkeds));
    }
};

function resetLista(){
    lista.innerHTML = '';
    localStorage.clear();
    misLiCheckeds = [];
    misTareas = [];
    checkeds  = [];
};

function eliminarTareasChecked(){
    //Elimina las tarea de la lista marcadas como completadas.
    misLiCheckeds.forEach((tarea) => {
        lista.removeChild(tarea)
    });
    //Elimina las tareas de las listas internas de tareas y añade las restantes.
    misTareas = [];
    misLiCheckeds = [];
    checkeds = [];
    let liRestantes = lista.children;
    let newliRestantes = Array.from(liRestantes);
    let tareasRestantes : Array<HTMLSpanElement> = [];
    for (let i = 0; i < newliRestantes.length; i++){
        let element = newliRestantes[i] as HTMLLIElement;
        tareasRestantes.push(element.children[1] as HTMLSpanElement)
    };
    for(let span of tareasRestantes){
        misTareas.push(span.textContent); 
    };
    //Elimina las tareas guardadas y las remplaza por las restantes.
    localStorage.setItem('Tareas', JSON.stringify(misTareas));
    localStorage.removeItem('Completadas');   
};

actualizarLista();

form.addEventListener('click', (e) =>{
    e.preventDefault();
    if(input.value.trim() !== ''){
        let tarea: string = input.value.trim();
        agregarTarea(tarea);
        form.reset();
    }
});

lista.addEventListener('click', (e) =>{
    let element = e.target as HTMLElement;
    if (element.classList.contains('checker')){
        let inputChecker = e.target as HTMLInputElement;
        if(inputChecker.checked){
            guardarLicheckeds(inputChecker);
            guardarCheckeds(inputChecker);
        }else{
            eliminarLiCheckeds(inputChecker);
            eliminarCheckeds(inputChecker);
        }
    }else if(element.classList.contains('eliminar')){
        let elementBorrar = element.closest('li') as HTMLLIElement;
        eliminarTarea(elementBorrar);
    }
});

resetBtn.addEventListener('click', () =>{
    resetLista();
});

BtnDellCompleted.addEventListener('click', () =>{
    eliminarTareasChecked();
});
