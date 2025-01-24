import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  selectedCity: string;
  recentSearches: string[];
}

const initialState: WeatherState = {
  selectedCity: '',
  recentSearches: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
      if (!state.recentSearches.includes(action.payload)) {
        state.recentSearches = [action.payload, ...state.recentSearches].slice(0, 5);
      }
    },
    clearHistory: (state) => {
      state.recentSearches = [];
      state.selectedCity = '';
    },
  },
});

export const { setSelectedCity, clearHistory } = weatherSlice.actions;

export default weatherSlice.reducer;
