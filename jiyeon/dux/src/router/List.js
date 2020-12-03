import React from 'react';
import {useDispatch}  from 'react-redux';
import {CounterAction} from '../actions';

const List = () => {

    const dispatch = useDispatch();

    const increase = () => {
        dispatch(CounterAction.onIncrease());
    }
    return (
        <div>
            <h1>List Component</h1>
            <button onClick={increase}>increase</button>
        </div>
    );
}

export default List;