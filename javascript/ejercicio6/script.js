var division = document.getElementById("texto").innerHTML;
console.log(division);



    var element = document.getElementById('texto');
    
       element.style.color = 'red'
       element.style.fontSize = '200px'
    
    console.log (element.style)

    function changetext(){
   element.innerHTML = 'El texto ha cambiado a otro texto'
}

var lista = document.getElementById("lista");

var arreglo = ["leche", "huevos", "harina"]
    for (var i = 0; i<arreglo.length; i++){
        lista.innerHTML+= "<li>" + arreglo[i] + "</li>"

    }

    function showAndHide (){

        if(element.style.display=="none"){
            element.style.display = "block"


        }

        else{
            element.style.display = "none"
        }

    }

    





