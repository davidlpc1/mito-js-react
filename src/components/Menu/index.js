/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ButtonLink from '../ButtonLink';
import Logo from '../../assets/images/MitoJsLogo.png';
import './Menu.css';
// eslint-disable-next-line import/order
import { Link, useHistory } from 'react-router-dom';

export default function Main() {
  const [search, setSearch] = useState('');
  const history = useHistory();
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" alt="MitoJS" src={Logo} />
      </Link>

      <div className="search-div">
        <input
          className="search-txt"
          type="search"
          value={search}
          placeholder="Pesquise um vídeo"
          onInput={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            history.push(`/search/${search}`);
          }}
        >
          <i className="fas fa-search" />
        </button>
      </div>

      <ButtonLink href="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}
