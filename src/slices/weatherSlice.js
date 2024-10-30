import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    weatherData: (state, action) => {
    }
  },
});

export const { toggleTheme } = themeSlice.actions;
export default weatherSlice.reducer;