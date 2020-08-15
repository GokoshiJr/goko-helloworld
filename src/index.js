const axios = require('axios');

const saludo = ({nombre, apellido, edad}) =>
  `Hola me llamo ${nombre} ${apellido} y tengo ${edad} years.`;

const personajes = async (id) => {
  const res = await axios.get('https://www.breakingbadapi.com/api/characters/');
  return res.data[id];
};

module.exports = {
  saludo,
  personajes,
};
