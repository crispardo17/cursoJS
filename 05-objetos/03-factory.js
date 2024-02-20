function crearUsuario(name , email ){
    return {
        email,
        name,
        activo:true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    }
}
let user1 = crearUsuario ('chris', 'cris.pardo17@gmail.com');
let user2 = crearUsuario ('jorge', 'jorge.pardo17@gmail.com');

console.log(user1, user2);