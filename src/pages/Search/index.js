/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import videosRepository from '../../repositories/video';
import VideoCard from '../../components/Carousel/components/VideoCard/index';
import Slider from '../../components/Carousel/components/Slider/index';

const SearchPage = () => {
  const [videosSearched, setVideosSearched] = useState([]);
  const { search } = useParams();

  useEffect(async () => {
    const response = await videosRepository.search(search);
    setVideosSearched(response);
    console.log(response);
  }, []);
  return (
    <PageDefault>

      <h1>
        Você pesquisou por:
        {' '}
        <br />
        {search}
      </h1>
      <Slider>
        {videosSearched.map((video, index) => (
          <VideoCard
            videoTitle={video.titulo}
            videoURL={video.url}
            categoryColor="blue"
            key={`video__${video.titulo}__${index}`}
          >
            {video.titulo}
          </VideoCard>
        ))}
      </Slider>

      <Link to="/">
        Voltar à Home
      </Link>

    </PageDefault>
  );
};

export default SearchPage;
