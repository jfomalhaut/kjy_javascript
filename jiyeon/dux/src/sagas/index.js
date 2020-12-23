import watchSignin from './AuthSaga';
import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
    yield spawn(watchSignin);
}