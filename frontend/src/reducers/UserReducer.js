
import { ADD_USER, DELETE_USER, UPDATE_USER, GET_USER } from '../actions/UserActions';


const initialState = {
    user: [{
        user_id: 1,
        auth_id: 'string',
        email: 'string email',
        type: 'string',
        billing_date: null
    }]
}

// not complete
const UserReducer = ((state = initialState, action) => {
    switch (action.type) {

        case GET_USER:
            console.log(state)
            
            return state

        case ADD_USER:
            return state

        case DELETE_USER:
            return state

        case UPDATE_USER:
            return state;
            
        default:
            return state;
            
    }
})

export {UserReducer}
