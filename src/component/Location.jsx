import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ElementLocation from '../element/ElementLocation';


//API R&M Location
const Location = () => {
  const [location, setLocation] = useState({});
  const [idLocation, setIdLocation] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data));
  }, []);

  // console.log(location);

  const searchLocation = () => {
    // alert(idLocation);
    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((res) => setLocation(res.data));
  }

  return (
    <div className='location'>
      <section className='location__section'>
        <div className='section__div'>
          <p className="div__p">{location.name}</p>
        </div>
        <div className='section__div'>
          <p className="div__p">type: {location.type}</p>
        </div>
        <div className='section__div'>
          <p className="div__p">dimension: {location.dimension}</p>
        </div>
        <div className='section__div'>
          <p className="div__p">population: por definir </p>
        </div>
      </section>

      <div className="location__search">
        <input
          className='search__input'
          type="text"
          value={idLocation}
          onChange={(e) => setIdLocation(e.target.value)}
        />
        <button
          className='search__btn'
          onClick={searchLocation}
        >Search
        </button>
      </div>
      <section className="location__element">
        <ul className='element__ul'>
          {location.residents?.map((resident) => (
            <ElementLocation
              resident={resident}
              key={resident}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Location;