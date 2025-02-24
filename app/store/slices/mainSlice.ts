import { Box, Skin } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  selectedSkin: Skin | null;
  selectedBox: Box | null;
  selectedBoxIds: number[];
}

const initialState: MainState = {
  selectedSkin: null,
  selectedBox: null,
  selectedBoxIds: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    setSkin(state, action: PayloadAction<Skin | null>) {
      state.selectedSkin = action.payload;
    },
    setBox(state, action: PayloadAction<Box | null>) {
      state.selectedBox = action.payload;

      if (action.payload?.id) {
        state.selectedBoxIds = [...state.selectedBoxIds, action.payload.id];
      }
    },
  },
});

export const { setSkin, setBox } = mainSlice.actions;

export default mainSlice.reducer;
