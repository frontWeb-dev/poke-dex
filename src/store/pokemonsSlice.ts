import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchPokemonsAPI, PokemonListType } from '../apis/pokemonAPI';

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (nextUrl?: string) => {
  const response = await fetchPokemonsAPI(nextUrl);
  return response;
});

interface PokemonsState {
  pokemons: PokemonListType;
}

const initialState = {
  pokemons: {
    count: 0,
    next: '',
    results: [],
  },
} as PokemonsState;

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<PokemonListType>) => {
      if (state.pokemons.results.length > 0) {
        state.pokemons = {
          ...action.payload,
          results: [...state.pokemons.results, ...action.payload.results],
        };
      } else {
        state.pokemons = action.payload;
      }
    });
  },
});

export const pokemonsReducer = pokemonSlice.reducer;
