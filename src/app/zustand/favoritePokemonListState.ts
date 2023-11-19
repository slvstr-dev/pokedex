import type { StateCreator } from 'zustand';

export interface FavoritePokemonListState {
  favoritePokemonList: number[];
  toggleFavoritePokemon: (pokemonId: number) => void;
}

export const favoritePokemonListState: StateCreator<FavoritePokemonListState> = (set) => ({
  favoritePokemonList: [],
  toggleFavoritePokemon: (pokemonId) => {
    set((state) => {
      const isPokemonInList = state.favoritePokemonList.includes(pokemonId);

      return {
        favoritePokemonList: isPokemonInList
          ? state.favoritePokemonList.filter((id) => id !== pokemonId)
          : [...state.favoritePokemonList, pokemonId],
      };
    });
  },
});
