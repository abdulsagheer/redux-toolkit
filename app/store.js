const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require('../feature/cake/cakeSlice')
const iceCreamReducer = require('../feature/icecream/iceCreamSlice')
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
})

module.exports = store;