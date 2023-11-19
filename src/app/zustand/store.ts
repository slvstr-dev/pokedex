import { create } from 'zustand';
import { settingsState, type SettingsState } from './settingsState';
import {
  favoritePokemonListState,
  type FavoritePokemonListState,
} from './favoritePokemonListState';

export interface Store extends SettingsState, FavoritePokemonListState {}

export const useStore = create<Store>()((...a) => ({
  ...settingsState(...a),
  ...favoritePokemonListState(...a),
}));
