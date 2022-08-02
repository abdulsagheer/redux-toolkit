const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../feature/cake/cakeSlice");
const iceCreamReducer = require("../feature/icecream/iceCreamSlice");
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
