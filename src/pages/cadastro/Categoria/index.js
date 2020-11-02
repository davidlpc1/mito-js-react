import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'

export default function CadastroCategoria(){
    const [ nomeDaCategoria, setNomeDaCategoria] = useState('')

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form>

                <label>
                    Nome da Categoria
                    <input type="text" 
                    value={nomeDaCategoria}
                    onChange={e => { 
                        setNomeDaCategoria(e.target.value)
                    }} />
                </label>

                <button>Cadastrar</button>
            </form>

            <Link to="/">
               Ir para a Home
            </Link>
        </PageDefault>
    )
}