
const { createStore } = Redux

const initState = {
    todos: [],
    posts: []
}

function myreducer(state = initState, action) {
    // console.log(action, state);
    if (action.type == 'ADD_TODO') {
        return {
            ...state, 
            todos: [...state.todos, action.todo]
        }
    }

     if (action.type == 'ADD_POST') {
        return {
            ...state, 
            todos: [...state.posts, action.post]
        }
    }
}

const store = createStore(myreducer);

store.subscribe((() => {
    // fires every time state is changed
    console.log('state updated')
    console.log(store.getState())
})

// const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };
// dispatching action to reducer
// store.dispatch(todoAction)

store.dispatch({type: 'ADD_TODO', todo: 'buy milk'})
store.dispatch({type: 'ADD_TODO', todo: 'exercise'})
store.dispatch({type: 'ADD_POST', post: 'dine food'})