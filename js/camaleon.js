const CambioColor= document.getElementById('CambioColor');
const textColor = document.querySelector('.txt_color');
import listado_colores from"./colores.js";
let colores=143;

CambioColor.addEventListener('click', () =>  {

    let randomColor =  Math.floor(Math.random() * colores);
    textColor.innerHTML = listado_colores[randomColor];
    document.body.style.background = listado_colores[randomColor];    
    
})

