import React from 'react';
import MonsterCard from '../monster-card/monster-card.component'; // Importă componenta MonsterCard
import { Monster } from '../../models/monster.model';
import './card-list.style.css'

interface CardListConfig {
    monsters:Monster[]
}

const CardList = ({monsters}:CardListConfig) => {
  return (
    <div className='card-list'>
      {monsters.map(monster => (
        <MonsterCard key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;