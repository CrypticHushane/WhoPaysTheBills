const INITIAL_STATE = {
    user: null,
    isAuth: false
}

export default function( state = INITIAL_STATE, action){
    switch(action.type){
        case 'GET_ARTICLES':
            return {...state, posts: action.payload}
        default:
            return state
    }

    
}