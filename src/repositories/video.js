/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function search(videoName) {
  return fetch(`${URL_VIDEOS}?q=${videoName}`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();

        return resposta;
      }

      throw new Error('Não foi possível encontrar os dados :(');
    });
}

export default {
  create,
  search,
};
