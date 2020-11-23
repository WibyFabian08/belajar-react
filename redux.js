// import library redux menggunakan node js
const redux = require('redux');
const createStore = redux.createStore;

// inisialisai state
const initialState = {
    value: 1,
    age: 17
}

// membuat Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'ADD_AGE') {
        return {
            ...state,
            age: state.age + 1
        }
    } 
    if(action.type === 'CHANGE_VALUE') {
        return {
            ...state,
            value: state.value + action.newValue
        }
    }
    return state;
}

// membuat store
const store = createStore(rootReducer);
console.log(store.getState());

// membuat subcription
store.subscribe(() => {
    console.log('subscribe', store.getState());
});


// membuat dispatching action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE' , newValue: 12})
console.log(store.getState());


