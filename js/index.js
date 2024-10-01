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