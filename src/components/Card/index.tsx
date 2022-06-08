import React from 'react';
import { PokemonProps, ListApi } from '../../service/api';
import { ContainerCard } from './styles';

interface CardProps {
  pokemon: PokemonProps;
}
const Card: React.FC<CardProps> = ({ pokemon }) => {
  function handleClick() {
    console.log('poke', pokemon.name);
  }
  return (
    <ContainerCard onClick={() => handleClick()}>{pokemon.name}</ContainerCard>
  );
};
export default Card;
