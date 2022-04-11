//Problemas comunes con los callbacks

const empleados = [

	{
		id: 1,
		nombre: 'Mariangel'
	},
	{
		id: 2,
		nombre: 'Linda'
	},
	{
		id: 3,
		nombre: 'Karen'
	}


];

const salarios = [

	{
		id: 1,
		salario: 1000
	},
	{
		id: 2,
		salario: 1500
	}

];

const getEmpleado = (id, callback) => {
	
	return new Promise((resolve, reject) => {

		const empleado = empleados.find(e => e.id === id);

		//if ternario
		(empleado)
			? resolve(empleado.nombre)
			: reject(`No existe el id ${id} del empleado`);		

	});
}

const getSalario = (id, callback) => {

	return new Promise((resolve, reject) => {

		const salario = salarios.find(e => e.id === id);

		(salario)
		? resolve(salario.salario)
		: reject(`No existe el salario con id ${id}`);
	});
}

const id = 3;

// getEmpleado(id)
// 	.then(empleado => console.log(empleado))
// 	.catch(err => console.log(err));

// getSalario(id)
// 	.then(salario => console.log(salario))
// 	.catch(err => console.log(err));



//EJEMPLO DE CALLBACK HELL O PROMISE HELL - NO HACERLO!!
// getEmpleado(id)
// 	.then(empleado => {
// 		getSalario(id)
// 		.then(salario => {
// 			console.log('El empleado', empleado, 'tiene un salario de:', salario);
// 		})
// 		.catch(err => console.log(err))
// 	})
// 	.catch(err => console.log(err))


//Promesas en cadena

let nombre;
getEmpleado(id)
	.then(empleado => {
		nombre = empleado;
		return getSalario(id);
	})
	.then(salario => console.log('El empleado', nombre, 'tiene un salario de:', salario))
	.catch(err => console.log(err));