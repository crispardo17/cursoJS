// personaje de tv

let nombre = "homero";
let anime = "los simpsons";
let edad = 36;

let personaje = {
    nombre: "chris",   
    anime: "novus",
    edad: 30,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 130;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);