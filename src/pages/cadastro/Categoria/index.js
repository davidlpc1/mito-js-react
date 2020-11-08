/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import '../../../loading.css';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    color: '',
  };

  const {
    handleChange, valores, clearForm, onDeletName,
  } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias/'
      : 'https://mito-js-flix.herokuapp.com/categorias/';

    fetch(URL_TOP)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        <br />
        <span style={{ maxWidth: 200 }}>
          {valores.nome}
        </span>
      </h1>

      <form onSubmit={clearForm}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
          delet
          onDelet={onDeletName}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
          delet={false}
          onDelet={() => {}}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={valores.color}
          onChange={handleChange}
          delet={false}
          onDelet={() => {}}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
        </div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          <li
            style={{
              background: categoria.cor,
              maxWidth: 350,
              padding: 10,
              marginBottom: 5,
              borderBottom: '2px solid #eee',
            }}
            key={`${categoria.nome}-${index}`}
          >
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}
