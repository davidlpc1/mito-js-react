/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
// import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import '../../loading.css';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasWithVideos) => {
        setDadosIniciais(categoriasWithVideos);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
        </div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
