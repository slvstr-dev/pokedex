import type { StateCreator } from 'zustand';

export interface SettingsState {
  hasNavigationBar: boolean;
  toggleHasNavigationBar: () => void;
}

export const settingsState: StateCreator<SettingsState> = (set) => ({
  hasNavigationBar: false,
  toggleHasNavigationBar: () => set((state) => ({ hasNavigationBar: !state.hasNavigationBar })),
});
