let array = [2, 5 , 7, 15, -5, -100, 55];
let resultado = cuantosPositivos(array);



function cuantosPositivos(arr){
    let negativo = 0;
    for (numero of arr){
        if (numero > 0){
            negativo++;
        }
    }
    return negativo;

}
console.log(resultado);