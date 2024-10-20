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
    } while (clave !== 'contraseña');
    alert("contraseña correcta")

    let nombre1 = prompt("ingresa tu nombre")
let apellido = prompt("ingresa tu apellido")
let edad2 = parseFloat(prompt("ingresa tu edad"))


function datos(nombre1 = "leslie", apellido = "coral" , edad2 = 25){
    console.log("el nombre es " , nombre1 + apellido + edad2)
}

datos("el nombre es " , nombre1 , apellido + "y su edad es " + edad2)






/*objetos*/
let producto = {
    id: 1, 
    nombre: " Buceo en playa", 
    duracion: "45 minutos",
    profundidad: "18 mts"
};
console.log(producto.nombre)
console.log(producto.profundidad)

/*forma 2*/
let producto2 = {
    id: 1, 
    nombre: " Buceo en cozumel", 
    duracion: "55 minutos",
    profundidad: "25 mts"
};
console.log(producto2["nombre"]);

/*objeto constructor*/ 
function Imersion(lugar, profundidad, tiempo){
    this.lugar = lugar;
    this.profundidad = profundidad;
    this.tiempo = tiempo;
}
let imersion1 = new Imersion('jardines','12 mts','55 minutos')
let imersion2 = new Imersion('sabalos','15 mts','50 minutos')
console.log (imersion1);
console.log (imersion2);




/*MI VERSION CALCULADORA*/ 
const tripPrices = [2000, 1200, 1500, 3000, 1500];


const trip1 = parseInt(prompt(" Cantidad de personas para Estados Unidos y Canada ($2000):")) || 0;
const trip2 = parseInt(prompt(" Cantidad de personas para Egipto y Marruecosa ($1200):")) || 0;
const trip3 = parseInt(prompt(" Cantidad de personas para Indonesia, Filipinas y Tailandia ($1500):")) || 0;
const trip4 = parseInt(prompt(" Cantidad de personas para Francia, España, Inglaterra ($3000):")) || 0;


const totalFinal = (trip1 * tripPrices[0]) +
              (trip2 * tripPrices[1]) +
              (trip3 * tripPrices[2]) +
              (trip4 * tripPrices[3]) +



alert(`Total cost for your dive trips: $${totalFinal}`);
