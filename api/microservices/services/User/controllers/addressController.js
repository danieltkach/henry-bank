const axios = require('axios');

const normalizeAddress = (req, res) => {
  const errorMsg =
    'No encontrada. Formato: por query -> /?address=la calle 123,la ciudad';
  const addressString = req.query?.address;

  const parsedAddress = encodeURI(addressString);
  console.log(parsedAddress);

  axios({
    url: `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${parsedAddress}`,
    method: 'GET',
  })
    .then((r) => {
      if (!r.data.direccionesNormalizadas.length) {
        return res.status(404).send(errorMsg);
      }

      res.send(r.data);
    })
    .catch((e) => {
      res.status(404).send(errorMsg);
    });
};

module.exports = {
  normalizeAddress,
};
