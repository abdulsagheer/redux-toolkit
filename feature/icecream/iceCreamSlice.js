const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIceCream: 100,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCream--;
    },
    restocked: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
