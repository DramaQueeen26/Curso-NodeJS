const deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	getNombre(){
		return `${this.nombre} ${this.apellido} ${this.poder}`
	}
};

// console.log(deadpool.getNombre()); 

// const {nombre, apellido, poder, edad = 30} = deadpool; //Desestructuración

// console.log(nombre, apellido, poder, edad); 

function imprime_heroe({nombre, apellido, poder, edad = 30}) //Desestructuración ne los argumentos
{
	console.log(nombre, apellido, poder, edad); 
}

imprime_heroe(deadpool);


const heroes = ['Deadpool', 'Superman', 'Batman'];

const [, h2, h3] = heroes; //Desestructurando arreglos

console.log(h2, h3);