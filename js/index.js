let edad = parseInt(prompt("ingresa tu edad"))

if(edad <= 18){
    console.log("La persona puede entrar")
}
else{
    console.log("La persona no entra")
}

let tablaDelcinco = 5;
for(let i = 1; i <=10; i++){
    let resultado = tablaDelcinco * i ;
    console.log( tablaDelcinco + "x" + i + "=" + resultado);
}

let clave;
do{
    clave = prompt('Ingresa la contraseña')
    } while (clave !== 'menorde18años');
    alert("contraseña correcta")

    let nombre1 = prompt("ingresa tu nombre")
let apellido = prompt("ingresa tu apellido")
let edad2 = parseFloat(prompt("ingresa tu edad"))


function datos(nombre1 = "leslie", apellido = "coral" , edad2 = 25){
    console.log("el nombre es " , nombre1 + apellido + edad2)
}

datos("el nombre es " , nombre1 , apellido + "y su edad es " + edad2)