const fs = require('fs');

async function leerArchivo() {
    try {
        //A. Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info
        const resultado = await fs.promises.readFile('./info.txt', 'utf-8')
        const info = JSON.parse(resultado);

        //B. Mostrar este objeto info en la consola
        // console.log(info);

        //C. Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
        info.contenidoObj.author = 'CoderHouse';
        await fs.promises.writeFile('./package.json.coder', JSON.stringify(resultado, null, 2), (error, result) => {
            if (error) {
                throw new Error('Ha ocurrido un error al escribir/grabar el archivo con await promises');
            } else {
                console.log('Archivo escrito con éxito con await promises');
            }
        })
    } catch (error) {
        console.log('Error de lectura!', error);
    }
}

leerArchivo();