import React from 'react';
import axios from 'axios';

export type PokemonProps = {
  id: number;
  name: string;
  abilites: string;
  image: string;
  type: string;
};

interface ListApi {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonProps[];
}

// promise===requisiao assinccrona
export async function pokemonList(): Promise<ListApi> {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const response = await axios.get<ListApi>(url);
  return response.data;
}
//
