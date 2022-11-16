const fs = require('fs');

//A. Crear el archivo
const fyh = new Date().toString();
fs.writeFileSync('./fyh.txt', fyh);

//B. Leer el archivo e imprimirlo
const data = fs.readFileSync('./fyh.txt', 'utf-8');
console.log(data);

//C. Manejo de errores
try {
    const data = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.log('Ha ocurrido un error al intentar leer el archivo');
}
