import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ElementLocation = ( {resident} ) => {
  const[ characters, setCharacters ] = useState({});

  useEffect(() => {
    axios.get(resident)
        .then(res => setCharacters(res.data));
  },[]);

  // console.log(characters);
  return (
    <li className='ul__li'>
      <div className='li__card'>
        <p className="card__p">{characters.name}</p>
        <img className='card__img' src={characters.image} alt="" />
      </div>
    </li>
  );
};

export default ElementLocation;