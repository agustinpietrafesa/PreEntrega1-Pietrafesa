alert("Bienvenido a In Shape, te ayudaremos a lograr tus objetivos, comencemos!!")


let nombre = prompt("Ingresa tu nombre")
let apellido = prompt("Ingresa tu apellido")
let persona = nombre + "  " + apellido 

alert(nombre + " es un placer tenerte con nosotros, completa los siguientes datos para continuar:")

let sexo = prompt("Cual es tu sexo, ingrese 1 si es mujer, 2 si es hombre")

let genero
if(sexo == 1){
   genero = "Femenino"
}else{
   genero = "Masculino"
}

let edad = prompt("Que que edad tienes?")
if(edad <= 17){
   alert("Lo sentimos pero debes tener al menos 18 años para hacer este test.");
}

let peso = prompt("Ingresa tu peso en Kg")
let altura = prompt("Ingresa tu altura en Cm ")
let fecha = prompt("Ingresa fecha, tipo DD/MM/YYYY")

const resultados = document.getElementById("resultados");

function calculoImc(){
   return (peso/((altura/100)*(altura/100)));
}

let imc = calculoImc();
alert("Tu IMC es igual a " + imc)

if(imc <= 18.5){
    alert("Según el IMC, tu peso es menor al normal")
}else if((imc > 18.5) && (imc <= 25)){
    alert("Según el IMC, tu peso es normal")
}else if((imc > 25.1) && (imc <= 29.9)){
    alert("Según el IMC, tu peso es superior a lo normal")
}else{
    alert("Según el IMC, tu indice se encuentra dentro de la franja de obesidad.")
}

let grasa
let masaOsea
let masaMusc

if (sexo == 1){
   grasa = (1.2 * imc) + (0.23 * edad) - 5.4
   alert("Tu porcentaje de grasa es " + grasa + "%")
   masaOsea = peso * 0.14
   alert("Tu masa ósea y organica es de " + masaOsea + " Kg")
   masaMusc = peso - (peso * (grasa / 100)) - masaOsea
   alert("Tu masa muscular es de " + masaMusc + " Kg")
}else if (sexo == 2){
   grasa = (1.2 * imc) + (0.23 * edad) - 10.8 - 5.4
   alert("Tu porcentaje de grasa es " + grasa + "%")
   masaOsea = peso * 0.15
   alert("Tu masa ósea y organica es de " + masaOsea + " Kg")
   masaMusc = peso - (peso * (grasa / 100)) - masaOsea
   alert("Tu masa muscular es de " + masaMusc + " Kg")   
}else{
   alert("Ingrese un dato valido")
}


// function grasaMujer(){
//    return ((1.2 * imc) + (0.23 * edad) - 5.4)
// }

// function grasaHombre(){
//    return ((1.2 * imc) + (0.23 * edad) - 10.8 - 5.4)
// }


alert("Recuerda, los resultados son calulados con operaciones matemáticas, mediante aproximaciones, no reflajan tu salud ni te definen!")

const usuario1 = {
   nombre: persona,
   genero: genero,
   edad: edad,
   peso: peso + " kg",
   altura: altura + " Cm",
   primerPesaje: {
       fecha: fecha,
       IMC: imc,
       grasaCorporal: grasa,
       masaOsea: masaOsea,
       masaMusc: masaMusc,
    },
};


const usuarios = [usuario1];


resultados.innerHTML = `<h2>${usuario1.nombre}</h2>
                        <h4>Edad: ${usuario1.edad}</h4>
                        <h4>Sexo: ${usuario1.genero}</h4>
                        <h4>Peso: ${usuario1.peso} </h4>
                        <h4>Altura: ${usuario1.altura} </h4>
                        <h4>Fecha del Test: ${usuario1.primerPesaje.fecha}</h4>
                        <h4>Indice de Masa Corporal: ${usuario1.primerPesaje.IMC}</h4>
                        <h4>Porcentaje de grasa corporal: ${usuario1.primerPesaje.grasaCorporal}%</h4>
                        <h4>Peso de la masa ósea y orgánica: ${usuario1.primerPesaje.masaOsea} Kg</h4>
                        <h4>Peso de la masa muscular: ${usuario1.primerPesaje.masaMusc} Kg</h4>`;

