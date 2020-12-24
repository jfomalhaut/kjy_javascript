import AuthAction from '../actions/AuthAction.js';

const initialState = {
    userInfo: {},
    login: false,
    failure: 0,
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case AuthAction.SIGNIN: {
        console.log('SIGNIN');
         return {
            ...state
         };   
        }
        case AuthAction.SIGNIN_SUCESS: {
            console.log('SIGNIN_SUCESS');
            return {
                ...state,
                login: true, 
                userInfo: action.userInfo,
                failure: 0
            }
        }
        case AuthAction.SIGNIN_FAILURE: {
            console.log('SIGNIN_FAILURE');
            return {
                ...state,
                login: false,
                userInfo: {},
                failure: state.failure + 1
            };
        }
        case AuthAction.LOGOUT: {
            return {
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default AuthReducer;