/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    color: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    const valueWillChange = event.target.getAttribute('name');
    setValor(valueWillChange, event.target.value);

    if (valueWillChange === 'nome') {
      if (valores.nome.length >= 18) {
        setValor('nome', `${valores.nome.substring(0, 15)}...`);
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);

    setValores(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
          delet
          onDelet={() => {
            setValor('nome', '');
          }}
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

      <ul>
        {categorias.map((categoria, index) => (
          <li
            style={{
              background: categoria.color,
              maxWidth: 350,
              padding: 10,
            }}
            key={`${categoria}-${index}`}
          >
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}
