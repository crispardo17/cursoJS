function Usuario (){
    this.id= 1;
    this.recueperarClave = function(){ //metodos 
        console.log("recueperando clave...");
    }
}
let usuario = new Usuario();

console.log(usuario);
