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
			: reject(`No existe el empleado con id ${id}`);		

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

const getInfoUsuario = async(id) =>{

	try{
		const empleado = await getEmpleado(id);
		const salario = await getSalario(id);

		return `El salario del empleado ${empleado} es ${salario}`;
	}catch(err){
		throw err;
	}

	
}

const id = 10;

getInfoUsuario(id)
	.then(msg => console.log(msg))
	.catch(err => console.log(err));


