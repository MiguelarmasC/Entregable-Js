# 🚀 Ejercicios Prácticos de JavaScript/ TypeScript.

Este repositorio contiene una colección de ejercicios prácticos desarrollados para afianzar la lógica de programación, el diseño modular con preprocesadores y la manipulación del DOM, por medio de la utilizacion de de herramientas como: **HTML, CSS/SASS, JavaScript y TypeScript**.

---

## 📂 Estructura del Repositorio y Arquitectura de Archivos

El proyecto está organizado para separar los ejercicios individualmente, con una página de aterrizaje para poder seleccionar entre los diferentes ejercicios; GitHub Pages[Link: (https://miguelarmasc.github.io/Entregable-Js/)]. 
Cada ejercicio cuenta con su propia hoja de estilos modular en **SASS/SCSS**:

```text
├── README.md                      # Documentación principal del proyecto.
├── index.html                     # Página de aterrizaje (Índice general que enlaza a los HTML)
├── html/                          # Vistas HTML individuales para cada ejercicio.
│   ├── ejercicio_1.html
│   ├── ejercicio_2.html
│   ├── ejercicio_3.html
│   ├── ejercicio_4.html
│   ├── ejercicio_5.html
│   ├── ejercicio_6.html
│   ├── ejercicio_7.html
│   ├── ejercicio_8.html
│   └── ejercicio_9.html
├── img/                           # Recursos gráficos y elementos visuales.
├── scss/                                                                      
│   ├── ejercicio_1.scss           # Estilos SASS para el Ejercicio 1
│   ├── ejercicio_2.scss           # Estilos SASS para el Ejercicio 2
│   ├── ejercicio_3.scss           # Estilos SASS para el Ejercicio 3
│   ├── ejercicio_4.scss           # Estilos SASS para el Ejercicio 4
│   ├── ejercicio_5.scss           # Estilos SASS para el Ejercicio 5
│   ├── ejercicio_6.scss           # Estilos SASS para el Ejercicio 6
│   ├── ejercicio_7.scss           # Estilos SASS para el Ejercicio 7
│   ├── ejercicio_8.scss           # Estilos SASS para el Ejercicio 8
│   └── ejercicio_9.scss           # Estilos SASS para el Ejercicio 9
├── css/                           # CSS compilado generado desde SASS
│   └── main.css (o estilos compilados por ejercicio)
│ 
├── ts/                            # Ficheros TypeScript correspondientes a los ejercicios. 
│   ├── ejercicio_1.ts             # Cambiador de Color de Fondo.
│   ├── ejercicio_2.ts             # Contador de Clics.
│   ├── ejercicio_3.ts             # Lista Dinámica.
│   ├── ejercicio_4.ts             # Filtro de Búsqueda en Tiempo Real.
│   ├── ejercicio_5.ts             # Calculadora Sencilla.
│   ├── ejercicio_6.ts             # Temporizador (Inicio, Pausa y Reinicio).
│   ├── ejercicio_7.ts             # Generador de Contraseñas Aleatorias.
│   ├── ejercicio_8.ts             # Contador de Palabras y Caracteres.
│   └── ejercicio_9.ts             # Lista de Tareas con LocalStorage.         
└── main.js