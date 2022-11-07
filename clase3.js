// const operacion = (val1, val2, callback) => {
//     return callback(val1, val2);
// };

// const sumar = (num1, num2) => {
//     return num1 + num2;
// }

// const restar = (num1, num2) => {
//     return num1 - num2;
// }

// const multiplicar = (num1, num2) => {
//     return num1 * num2;
// }

// const dividir = (num1, num2) => {
//     return num1 / num2;
// }
// console.log(`El resultado de la suma es ${operacion(2, 10, sumar)}`);
// console.log(`El resultado de la resta es ${operacion(2, 10, restar)}`);
// console.log(`El resultado de la multiplicacion es ${operacion(3, 20, multiplicar)}`);
// console.log(`El resultado de la division es ${operacion(10, 2, dividir)}`);

//*********************
// ***** Promesas *****
//*********************

// function dividir(dividendo, divisor) {
//     return new Promise((resolve, reject) => {
//         if (divisor == 0) {
//             reject('no se puede dividir por cero')
//         } else {
//             resolve(dividendo / divisor)
//         }
//     })
// }

// dividir(10, 0)
//     .then(resultado => {
//         console.log(`resultado: ${resultado}`)
//     })
//     .catch(error => {
//         console.log(`error: ${error}`)
//     })

Promise.resolve(20)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if (x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch ( console.log )
