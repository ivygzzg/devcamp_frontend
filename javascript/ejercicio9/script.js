var colores = ["#DEC0B2" , "#F5900F" , "#414C53", "#8C8C8A"]


var index = 0;
var element = document.getElementById("ejercicio");



function changeColor() {
    var index = Math.floor (Math.random() * colores.length);
    element.style.backgroundColor = colores[index]; 
}

//     index ++;
//     //NECESITAMOS VALIDAS SI INDEX ES IGUAL O MENOR AL NUMERO DE ELEMENTOS DEL ARREGLO

//     if(index >= colores.length) {

//         index= 0;
//     }

//         element.style.backgroundColor = colores [index];
//         element.innerHTML = index;

    

// }

// Math.floor

