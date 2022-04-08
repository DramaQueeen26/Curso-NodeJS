//Un callback es cuando una función se ejecuta en el momento en el que lo requiera

// setTimeout(function(){
// 	console.log('Hola mundo');
// },3000);

const getUsuarioByID = (id, callback) => {
	const usuario = {
		id,
		nombre: 'Mariangel'
	}

	setTimeout(() => {
		callback(usuario);
	}, 2000);
}

getUsuarioByID(10, (usuario) => {
	console.log(usuario.id);
	console.log(usuario.nombre.toUpperCase());

});