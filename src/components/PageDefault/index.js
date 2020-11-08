/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color:var(--black);
    color: var(--white);
    flex:1;
    padding: 50px 5% 0;
    margin:0;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

export default function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        { children }
      </Main>
      <Footer />
    </>
  );
}
