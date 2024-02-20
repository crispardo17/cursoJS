let longitud = 0;
function crearArray (n){
    if (n <= 0){
        return ['no se puede'];
    }
    let arr = [];
    for (let i = 0; i < n; i++){
        arr[i] = i+1;  
    }
    return arr;
}

let resultado = crearArray(longitud);

console.log(resultado);