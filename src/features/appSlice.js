import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

// we can do assynconous dispatchs with redux

const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      // my state will catch my dispatch from my app that comes from the action.payload
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

/*
  A selector is a function that accepts Redux state as an argument 
  and returns data that is derived from that state. Selectors can provide performance optimizations to 
  your application and can also help you encapsulate your global state tree.
*/
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;