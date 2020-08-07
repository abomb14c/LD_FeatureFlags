import React from 'react';
import './card.css'
import PropTypes from 'prop-types';

const Card = ({name, desc, status}) => {

  return (
    <div className="card">
      <div className='name-container'>
        <h5 className="name">{name}</h5>
      </div>
      <div className='stat-container'>
        <p className='music'>Genre: {desc}</p>
        <p className='status'>Status: {status}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  status: PropTypes.string,
}

export default Card;