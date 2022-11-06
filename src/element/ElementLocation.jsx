import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ElementLocation = ({ resident }) => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    axios.get(resident)
      .then(res => setCharacters(res.data));
  }, []);

  // console.log(characters);
  return (
    <li className='ul__li'>
      <div className='li__card'>
        <img className='card__img' src={characters.image} alt="" />

        <div className="card__status">
          <div className="status__color"></div>
          <p className="status__p">{characters.status}</p>
        </div>

        <div className="card__div">
          <p className="card__p">{characters.name}</p>
          <hr className='card__hr' />
          <p className="card__p card__p-info">Species</p>
          <p className="card__p">{characters.species}</p>

          <p className="card__p card__p-info">Origin</p>
          <p className="card__p">{characters.type}</p>

          <p className="card__p card__p-info">Episodes where appear</p>
          <p className="card__p">{characters.episode?.length}</p>
        </div>
      </div>
    </li>
  );
};

export default ElementLocation;