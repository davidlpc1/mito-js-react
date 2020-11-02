import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'

export default function CadastroCategoria(){
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form>

                <label>
                    Nome da Categoria
                    <input type="text" />
                </label>

                <button>Cadastrar</button>
            </form>

            <Link to="/">
               Ir para a Home
            </Link>
        </PageDefault>
    )
}