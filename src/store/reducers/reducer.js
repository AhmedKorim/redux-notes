const intialState = {
    counter: 0,
    results: []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                results: [...state.results, {value: state.counter + 1, id: state.counter + state.results.length + Math.random().toFixed(2)}],
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                results: [...state.results, {value: state.counter - 1, id: state.counter + state.results.length + Math.random().toFixed(2)}],
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                results: [...state.results, {value: state.counter + action.value, id: state.counter + state.results.length + Math.random().toFixed(2)}],
                counter: state.counter + action.value
            }
        case 'SUB':
            return {
                ...state,
                results: [...state.results, {id: state.counter + state.results.length + Math.random().toFixed(2), value: state.counter - action.value}],
                counter: state.counter - action.value
            }

        case  'REMOVE_RESULT' :
            return {
                ...state,
                results:
                    state.results.filter(result => result.id !== action.payload.id)
            }
        default:
            return state;
    }

}


export default reducer;
