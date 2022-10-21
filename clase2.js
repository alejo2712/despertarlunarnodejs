// //1
// function mostrarLista (lista) {
//     if (!lista) {
//         return 'Lista no definida';
//     } 
//     if (lista.length === 0) {
//         return 'Lista vacia';
//     }
//         return console.log(lista);
// }

// mostrarLista([1,2,3]);

// //2
// (function mostrarLista (lista) {
//     if (lista == ' ') {
//         console.log ('lista vacia');
//     } else {
//         console.log (lista);
//     }
// }) ([4,5,6]);

// //3
// function multiplicar(numero1) { 
//     return function (numero2) {
//         return numero1 * numero2;
//     }
// };

// const multiplicando = multiplicar(4);
// console.log (multiplicando(4));

// const duplicar = multiplicar (2);
// console.log (duplicar(10));

// const triplicar = multiplicar (3);
// console.log (triplicar(10));

// class Carro {
//     constructor (marca, modelo, color) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.color = color;
//     }

//     tocarBocina () {
//         return 'Beeeep!!!!';
//     }
// }

// const mustang = new Carro ('ford', 'mustang', 'negro');
// // console.log(mustang);

// console.log(mustang.tocarBocina());

//Entregable

class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(nombre, apellido) {
        console.log (`EL nombre completo es ${nombre} ${apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
        console.log(`Agregaste la mascota: ${mascota}`);
        console.log(`Tu array de mascotas quedó así ${this.mascotas}`);
    }

    countMascotas() {
        console.log(`La cantidad de mascotas es: ${this.mascotas.length}`);
    }

    addBook(nombre, autor) {
        console.log(`Libro nuevo para agregar al array de objetos: ${nombre}, ${autor}`);
        this.libros.push({nombre: nombre, autor: autor});
        const books = JSON.stringify(this.libros);
        console.log(`Ahora tu array de libros quedo asi: ${books}`);
    }

    getBookNames() {
        let test = [];
        for (let i = 0; i < this.libros.length; i++) {
            test.push(JSON.stringify(this.libros[i].nombre));
        }
        console.log(`Los nombres de los libros son: ${test}`);
    }
}

const user1 = new Usuario ('user1', 'user1Apellido', [{nombre:'libro1', autor: 'alejo'}], ['mascota1', 'mascota2']);

// console.log (user1);
// user1.getFullName(user1.nombre, user1.apellido);
// user1.addMascota('perrito');
// user1.countMascotas();
user1.addBook('libro2', 'Rolon');
user1.getBookNames();