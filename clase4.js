const mostrarLetras = (texto, callback) => {
    let contador = 0;
    const interval = setInterval(() => {
        console.log(texto[contador]);
        contador++;
        if (contador >= texto.length) {
            callback();
            clearInterval(interval);
        }
    }, 1000)
}

const fin = () => console.log('Terminé');
mostrarLetras('Hola', fin);
