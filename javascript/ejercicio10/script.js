// var empleado = {
//     nombre: "Ivonne",
//     rfc: "...",
//     salario: 0,
//     puesto: "el que laba los baños",
//     departamento: "limpieza",
//     persona: {
//         direccion: "jsfkdsjfkdsf",
//         edad: 21,
//         fechaNacimiento: "12-13-13",
//     },
//     barrer: function() {
//         console.log("barrer")
//     },

//     sacudir: function() {
//         console.log ("sacudir")
//     },

//     //parametro
//     saludar: function(nombre) {
//         console.log("hola" + nombre)
//     },
// };

// console.log (empleado.nombre);
// console.log (empleado.salario);
// console.log (empleado.persona.edad);
// empleado.barrer();
// empleado.sacudir();
// empleado.saludar ("ivonne");

class concert {
    constructor(fecha, horario, lugar, genero, mayorDeEdad, artista) {
        this.fecha = fecha;
        this.horario = horario;
        this.lugar = lugar;
        this.genero = genero;
        this.mayorDeEdad = mayorDeEdad;
        this.artista = artista;

    }

}
var concierto = new concert ("20/10/18","6:00pm",'Fundidora',"Tex Mex", "true")

class artista {
    constructor(nombre, cancion, horario, integrantes, artista) {
        this.nombre = nombre;
        this.cancion = cancion;
        this.horario = horario;
        this.integrantes = integrantes;
        this.artista = artista;

    }

}

var grupo = new concert ("selena y los Dinos","bidi bidi bom bom",'7:00pm',"5",)
      
   

    // opening: function() {
    //     console.log("opening")
    // },


    


console.log(concierto);
console.log(grupo);


// class Figura {
//     // numeroDeLados = 4;
//     // medidadDeLados= 3;
//     constructor(numeroDeLados, medidaDeLado) {
//         this.numeroDeLados = numeroDeLados;
//         this.medidaDeLado = medidaDeLado;
//     }

//     perimetro () {
//         return this.medidaDeLado * this.numeroDeLados;
//     }

// }

// var circulo = new Figura (0,3);
// var triangulo = new Figura(3,3);
// var cuadrado = new Figura(4,5);
// // circulo.numeroDeLados;
// // var cuadrado = new Figura;

// console.log (circulo);
// console.log (triangulo);
// console.log (cuadrado);
// console.log (triangulo.perimetro());
