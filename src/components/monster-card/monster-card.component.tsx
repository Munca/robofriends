import React from 'react';
import { Monster } from '../../models/monster.model';
import { config } from 'process';
import './monster-card.style.css'

interface MonsterCardConfig{
    monster:Monster
}

const MonsterCard = ({monster}:MonsterCardConfig) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}`} alt="robot" />
      <p>Name: {monster.name}</p>
      <p>Email: {monster.email}</p>
    </div>
  );
};

export default MonsterCard;