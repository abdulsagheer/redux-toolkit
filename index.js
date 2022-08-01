const store = require('./app/store')
const cakeActions = require('./feature/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./feature/icecream/iceCreamSlice').iceCreamActions; //
console.log('Initial State:', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated state:', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(3));
unsubscribe();