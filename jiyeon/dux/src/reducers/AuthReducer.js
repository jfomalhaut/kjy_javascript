// state를 다룬다.
// 이 해당 reducer가 어떤 값들을 사용하고 유지할지에 대한 내용을 정의

import { AuthAction } from "../actions";

const initialState = {
	userInfo: {},
	login: false,
	failure: 0
};

const AuthReducer = (state = initialState, action) => {
<<<<<<< HEAD
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
=======
	switch(action.type) {
		case AuthAction.SIGNIN: {
			console.log('SIGNIN');
			return {
				...state,
			};
		}
		case AuthAction.SIGNIN_SUCCESS: {
			console.log('SIGNIN_SUCCESS');
			return {
				...state,
				login: true,
				userInfo: action.userInfo,
				failure: 0,
			};
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
				...state,
				userInfo: {},
				login: false,
				failure: 0
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};
>>>>>>> 342407456d6643431ccdf47ca177409a74178c19

export default AuthReducer;