import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const threatSlice = createSlice({
  name: "threats",
  initialState: {
    threats: [],
    filteredThreats: [],
  },
  reducers: {
    setThreats: (state, action) => {
      state.threats = action.payload;
      state.filteredThreats = action.payload;
    },
    searchThreats: (state, action) => {
      const term = action.payload.toLowerCase();
      state.filteredThreats = state.threats.filter(
        (threat) =>
          threat.ipAddress.toLowerCase().includes(term) ||
          threat.domain.toLowerCase().includes(term) ||
          threat.threatLevel.toLowerCase().includes(term)
      );
    },
  },
});

export const { setThreats, searchThreats } = threatSlice.actions;

export const fetchThreats = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("authtoken");
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/threats`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setThreats(response.data));
  } catch (err) {
    console.error("Error fetching threats:", err.message);
  }
};

export default threatSlice.reducer;
