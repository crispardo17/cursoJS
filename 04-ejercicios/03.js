let resultados = getbyIdx([1,2], 0);
console.log(resultados);

function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx){
         return "no se puede"; 
    }
    return arr[idx];
}