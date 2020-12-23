const SIGNIN = "SIGNIN"; 
const LOGOUT = "LOGOUT";
const SIGNIN_SUCESS = "SIGNIN_SUCESS";
const SIGNIN_FAILURE = "SIGNIN_FAILURE";

const signInDispatch = (payload) => ({ type: SIGNIN, payload });
const signInSucess = (userInfo) => ({type: SIGNiN_SUCESS, userInfo });
const signInFailure = () => ({ type: SIGNIN_FAILURE });
const logoutDispatch = () => ({ type: LOGOUT });

export default{
    SIGNIN, LOGOUT, signInDispatch, logoutDispatch, signInSucess, signInFailure
}