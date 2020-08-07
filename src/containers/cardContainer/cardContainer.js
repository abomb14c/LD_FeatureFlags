import React from 'react';
import Card from '../../components/Card/Card'
import './card-container.css'
import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import {musicCardData, bballCardData} from '../../mockData';
import PropTypes from 'prop-types';

const CardContainer = ({ flags }) => {

  let musicCards = musicCardData.map((artist, index) => {
    return <Card {...artist} key={index} />
  })

  let bballCards = bballCardData.map((player, index) => {
    return <Card {...player} key={index} />
  })
  
  let primaryCards= <div className="card-container">{musicCards}</div>

  let secondaryCards = <div className="card-container">{bballCards}</div>

  return (
    flags.newArtists ? bballCards : primaryCards

  )
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  flags: PropTypes.object.isRequired,
}

export default withLDConsumer()(CardContainer);