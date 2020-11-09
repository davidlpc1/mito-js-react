/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import { Button } from '../../../components/Button';
import videosRepository from '../../../repositories/video';

export default function CadastroVideo() {
  const { handleChange, valores } = useForm({
    titulo: '',
    url: 'https://youtube.com/watch?v=',
    categoria: '',
  });
  const history = useHistory();

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: 1,
        })
          .then(() => {
            alert(`O vídeo ${valores.titulo || ''} foi cadastrado`);
            history.push('/');
          })
          .catch(() => {
            alert('O cadastro falhou :(');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="url"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}
