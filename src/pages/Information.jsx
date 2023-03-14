import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InformationCard from '../components/InformationCard/Index'
import { Skeletons } from '../components/Skeletons/Index';

export const Information = () => {
  
  const [skeleton, setSkeleton] = useState(true);
  const [card, setCard] = useState({});

  const { id } = useParams();
  
  const getByID = async id => {

    const res = await axios.get(`https://api.disneyapi.dev/characters/${id}`);
    const data = res.data;
    return data;
	}

  const fetchCard = async id => {
		const data = await getByID(id);
		setCard(data);
    setSkeleton(false);
	};

  useEffect(() => {
		fetchCard(id);
	}, []);

  return (
    <div>
      {skeleton ? (<Skeletons/>):(
        <InformationCard name={card.name} image={card.imageUrl} 
          films={card.films} shortFilms={card.shortFilms} tvShows={card.tvShows}
          videoGames={card.videoGames} parkAttractions={card.parkAttractions} 
          allies={card.allies} enemies={card.enemies} />
      )}
    </div>
  )
}
