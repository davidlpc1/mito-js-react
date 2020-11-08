/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import { useState } from 'react';

export default function useForm(valoresIniciais) {
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

  function clearForm(event) {
    event.preventDefault();
    setValores(valoresIniciais);
  }

  function onDeletName() {
    setValor('nome', '');
  }

  return {
    valores,
    handleChange,
    clearForm,
    onDeletName,
  };
}
