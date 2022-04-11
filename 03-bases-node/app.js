const fs = require('fs'); //Require de file system, para más información buscar en la documentación de nodejs

console.clear();

console.log('===========================');
console.log('	Tabla ');
console.log('===========================');

const base = 2;
let salida = '';

for(let i = 1; i <= 10; i++){
	salida += `${base} x ${i} = ${base*i}\n`;
}

fs.writeFile(`tabla-${base}.txt`, salida, (err) => { //Tiene un callback, una función que se ejecutará cuando todo el procedimiento termine.

	if(err) throw err;

	console.log(`tabla-${base}.txt creada!`);
})

