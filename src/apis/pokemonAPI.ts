import axios from 'axios';

const remote = axios.create({});
const BASE_URL = 'http://pokeapi.co/api/v2/pokemon';

export interface PokeCardProps {
  name: string;
  id?: number;
}

export interface PokemonListType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetailType {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface PokemonsDetailType {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: string[];
  images: {
    frontDefault: string;
    dreamWorld: string;
    officialArtwork: string;
  };
  baseStat: {
    name: string;
    value: number;
  }[];
}

export const fetchPokemons = async () => {
  const response = await remote.get<PokemonListType>(BASE_URL);
  return response.data;
};

export const fetchPokemonDetail = async (name: string): Promise<PokemonsDetailType> => {
  const response = await remote.get<PokemonDetailType>(`${BASE_URL}/${name}`);
  const detail = response.data;

  return {
    id: detail.id,
    name: detail.name,
    weight: detail.weight / 10,
    height: detail.height / 10,
    types: detail.types.map((item) => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorld: detail.sprites.other.dream_world.front_default,
      officialArtwork: detail.sprites.other['official-artwork'].front_default,
    },
    baseStat: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      };
    }),
  };
};
