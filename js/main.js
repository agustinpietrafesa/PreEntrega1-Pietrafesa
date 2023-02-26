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

 if (sexo == 1){
    grasa = (1.2 * imc) + (0.23 * edad) - 5.4
    alert("Tu porcentaje de grasa es " + grasa + "%")
 }else if (sexo == 2){
    grasa = (1.2 * imc) + (0.23 * edad) - 10.8 - 5.4
    alert("Tu porcentaje de grasa es " + grasa + "%")   
 }else{
    alert("Ingrese un dato valido")
 }

 let masaOsea

 if (sexo == 1){
   masaOsea = peso * 0.14
    alert("Tu masa ósea y organica es de " + masaOsea + " Kg")
 }else if (sexo == 2){
   masaOsea = peso * 0.15
    alert("Tu masa ósea y organica es de " + masaOsea + " Kg")
  }else{
    alert("Ingrese un dato valido")
 }

 
let masaMusc

if (sexo == 1){
   masaMusc = peso - (peso * (grasa / 100)) - masaOsea
    alert("Tu masa muscular es de " + masaMusc + " Kg")
 }else if (sexo == 2){
   masaMusc = peso - (peso * (grasa / 100)) - masaOsea
    alert("Tu masa muscular es de " + masaMusc + " Kg")
  }else{
    alert("Ingrese un dato valido")
 }

 alert("Recuerda, los resultados son calulados con operaciones matemáticas, mediante aproximaciones, no reflajan tu salud ni te definen!")

resultados.innerHTML = `<h2>${persona}</h2>
                        <h4>Edad: ${edad}</h4>
                        <h4>Sexo: ${genero}</h4>
                        <h4>Peso: ${peso} Kg</h4>
                        <h4>Altura: ${altura} Cm</h4>
                        <h4>Indice de Masa Corporal: ${imc}</h4>
                        <h4>Porcentaje de grasa corporal: ${grasa}%</h4>
                        <h4>Peso de la masa ósea y orgánica: ${masaOsea} Kg</h4>
                        <h4>Peso de la masa muscular: ${masaMusc} Kg</h4>`;


const usuario1 = {
   nombre: 
   genero: 
   edad: 
   peso:
   altura:
}


usuario1.nombre = nombre