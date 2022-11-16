const info = {
    contenidoStr: '(contenido del archivo leído en formato string)',
    contenidoObj: '(contenido del archivo leído en formato objeto)',
    size: '(tamaño en bytes del archivo)'
}

const fs = require('fs');

//B. Leer el archivo e imprimirlo
const data = fs.readFile('./package.json', 'utf-8', (error, resultado) => {
    if (error) {
        //E. Incluir el manejo de errores (con throw new Error)
        throw new Error('hubo un error al leer el archivo en forma asincronica');
    } else {
        console.log('entré al else');
        info.contenidoStr = resultado;
        info.contenidoObj = JSON.parse(resultado);
        info.size = resultado.size;

        //C. Mostrar por consola el objeto info
        console.log(info);

        //D. Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
        fs.writeFile('./info.txt', JSON.stringify(info, null, 2), (error, resultado) => {
            if (error) {
                throw new Error('Ha ocurrido un error al escribir/grabar el archivo en forma asincronica');
            } else {
                console.log('Archivo escrito con éxito');
            }
        })
    }
});