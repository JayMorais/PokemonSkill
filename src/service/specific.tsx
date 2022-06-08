import React from 'react';
import axios from 'axios';
import PokemonDetails from '../../types/PokemonDetails';

// promise===requisiao assinccrona
export async function specificListPoke(name: string): Promise<PokemonDetails> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await axios.get<PokemonDetails>(url);
  return response.data;
}
