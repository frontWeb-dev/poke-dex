import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { fetchPokemonDetailAPI, PokemonsDetailType } from '../apis/pokemonAPI';

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonsDetail',
  async (name: string) => {
    const response = await fetchPokemonDetailAPI(name);
    return response;
  },
  {
    // 이미 있는 정보는 api 다시 호출하지 않기
    condition: (name, { getState }) => {
      const { pokemonDetail } = getState() as RootState;
      const pokemon = pokemonDetail.pokemonDetails[name];
      return !pokemon;
    },
  }
);

interface PokemonsDetailState {
  pokemonDetails: Record<string, PokemonsDetailType>;
}

const initialState = {
  pokemonDetails: {},
} as PokemonsDetailState;

const pokemonDetailSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPokemonDetail.fulfilled,
      (state, action: PayloadAction<PokemonsDetailType>) => {
        state.pokemonDetails = {
          ...state.pokemonDetails,
          [action.payload.name]: action.payload,
        };
      }
    );
  },
});

export const pokemonDetailReducer = pokemonDetailSlice.reducer;
