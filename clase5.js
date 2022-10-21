const moment = require ('moment');

const hoy = moment(new Date());
const fechaNacimiento = moment(new Date('12/08/1989'));

const diferencia = hoy.diff(fechaNacimiento);

const duracion = moment.duration(diferencia);

const dias = Math.floor(duracion.asDays());
const anios = Math.ceil(duracion.asYears());

const hoyFormateado = hoy.format('DD/MM/yyyy');
const fechaNacimientoFormateado = hoy.format('DD/MM/yyyy');

console.log(`Hoy es ${hoyFormateado}`);
console.log(`Nací el ${fechaNacimientoFormateado}`);
console.log(`Desde mi nacimiento han pasado ${anios}`);
console.log(`Hoy es ${hoyFormateado}`);
