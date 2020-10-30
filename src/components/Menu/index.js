import React from 'react';
import ButtonLink from '../ButtonLink';
import Logo from '../../assets/images/MitoJsLogo.png';
import './Menu.css'

export default function Main (){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" alt="MitoJS" src={Logo} />
            </a>

            <ButtonLink href="/" as="a" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
        </nav>      
    );
}