import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card';
import { ContainerCard } from '../../components/Card/styles';
import Container from '../../components/Container/container';
import Navbar from '../../components/Header/Navbar';
import { ContainerCustom } from '../../components/styles';
import PokemonDetails from '../../types/PokemonDetails';

import { pokemonList, PokemonProps } from '../../service/api';
import { specificListPoke } from '../../service/specific';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonProps | undefined
  >(undefined);
  const [details, setDetails] = useState<PokemonDetails | undefined>(undefined);

  useEffect(() => {
    pokemonList().then(response => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;
    specificListPoke(selectedPokemon.name).then(response =>
      setDetails(response),
    );
  }, [selectedPokemon, selectedPokemon?.name]);
  return (
    <>
      <div>
        {pokemons.map(item => (
          <div>
            <Card pokemon={item} />
            {/* <h2>#{item.id}</h2> */}
            {/* {item.name} */}
            {/* <p>{item.type}</p>
              <p>{item.abilites}</p> */}
          </div>
        ))}
        {JSON.stringify(details, undefined, 2)}
      </div>
    </>
  );
};
export default Pokemons;
