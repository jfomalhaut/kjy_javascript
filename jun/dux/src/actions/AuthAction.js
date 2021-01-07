const SIGNIN = "SIGNIN";
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
const SIGNIN_FAILURE = "SIGNIN_FAILURE";
const LOGOUT = "LOGOUT";

const signIn = (payload) => ({ type: SIGNIN, payload });
const signInSucess = (userInfo) => ({ type: SIGNIN_SUCCESS, userInfo });
const signInFailure = () => ({ type: SIGNIN_FAILURE });
const logout = () => ({ type: LOGOUT });

export default {
	SIGNIN,
	LOGOUT,
	SIGNIN_SUCCESS,
	SIGNIN_FAILURE,
	signInSucess,
	signInFailure,
	signIn,
	logout,
};