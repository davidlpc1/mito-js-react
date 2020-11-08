import React from 'react';
import { FooterBase } from './styles';
import LogoLight from '../../assets/images/MitoJsLogoLight.png';

function Footer() {
  return (
    <FooterBase style={{ margin: 0 }}>
      <a href="/">
        <img
          src={LogoLight}
          alt="MITOJs"
          style={{
            height: '20px',
          }}
        />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.instagram.com/davidlpc1/">
          Davi Lucas
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
