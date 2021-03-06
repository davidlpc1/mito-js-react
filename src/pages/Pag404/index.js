/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React from 'react';
import { ContainerFlex } from './styles';
import Menu from '../../components/Menu';

const Pag404 = () => (
  <>
    <Menu />

    <ContainerFlex>
      <h1>
        Não encontramos nada
        <img src="https://www.flaticon.com/svg/static/icons/svg/953/953725.svg" alt="404" />
      </h1>
      <a href="/">
        Voltar à Home
      </a>
    </ContainerFlex>

  </>
);

export default Pag404;
