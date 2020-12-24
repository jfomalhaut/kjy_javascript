const SIGNIN = "SIGNIN"; 
const LOGOUT = "LOGOUT";
const SIGNIN_SUCESS = "SIGNIN_SUCESS";
const SIGNIN_FAILURE = "SIGNIN_FAILURE";

const signIn = (payload) => ({ type: SIGNIN, payload });
const signInSucess = (userInfo) => ({type: SIGNIN_SUCESS, userInfo });
const signInFailure = () => ({ type: SIGNIN_FAILURE });
const logout = () => ({ type: LOGOUT });

export default{
    SIGNIN, LOGOUT, SIGNIN_SUCESS, SIGNIN_FAILURE, signIn, logout, signInSucess, signInFailure
}