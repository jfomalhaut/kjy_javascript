import Axios from 'axios';
import { AuthAction } from '../actions';
import { call, put, takeLatest } from 'redux-saga/effects';

function * signin(action) {
    try {
        const { payload } = action;
        const { data: { valid, userinfo } } = yield call([Axios, 'post'], 'http://localhost:4000/api/signin', payload);
        if(valid) {
            yield put(AuthAction.signInSucess(userinfo));
        } else { //비번이 틀렸을 때
            throw false;
        }
    } catch(error) {
        yield put(AuthAction.signInFailure());
    }
}

export default function* watchSignin() { 
    yield takeLatest(AuthAction.SIGNIN, signin);
};