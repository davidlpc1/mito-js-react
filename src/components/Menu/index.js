/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import ButtonLink from '../ButtonLink';
import Logo from '../../assets/images/MitoJsLogo.png';
import './Menu.css';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" alt="MitoJS" src={Logo} />
      </Link>

      <ButtonLink href="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}
