const {personajes, saludo} = require('./index.js');

const julio = {
  nombre: 'Julio',
  apellido: 'Gonzalez',
  edad: '19',
};

personajes(0)
  .then((data) => console.log(data))
  .catch('Error');

console.log(saludo(julio));
