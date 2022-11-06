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

      <div className="location__search">
        <input
          className='search__input'
          type="text"
          placeholder='Type a location id'
          value={idLocation}
          onChange={(e) => setIdLocation(e.target.value)}
        />
        <button
          className='search__btn'
          onClick={searchLocation}
        >
          <svg className='btn__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
          </svg>
        </button>
      </div>

      <section className='location__section'>
        <div className='section__div'>
          <p className="div__p div__p-title">{location.name}</p>
        </div>
        <div className='section__div'>
          <p className="div__p">
            <b className='div__p div__p-b'>Type:</b>
             {location.type}
          </p>
        </div>
        <div className='section__div'>
          <p className="div__p">
            <b className='div__p div__p-b'>Dimension:</b>
             {location.dimension}
          </p>
        </div>
        <div className='section__div'>
          <p className="div__p">
            <b className='div__p div__p-b'>Population:</b>
             ??
          </p>
        </div>
      </section>

      <section className="location__element">
        <h2 className="element__h2">Resident</h2>
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