import {CounterAction} from '../actions';

//inital value 
const initalState = {
    count: 1
}

const CounterReducer = (state = initalState, action) => { //type에는 일의 정의 
    switch(action.type){
        case CounterAction.INCREASEMENT : {
            return {
                ...state,
                count: state.count + 1
            }; //state 는 초기값을 누적으로 가지고 있다
        }
        case CounterAction.DECREASEMENT : {
            return state - 1;
        }
        case 'INPUT' : {
            return state + Number(action.value);
        }
        default : { //안쓰면 오류남
            return state;
        }
    }
};

export default CounterReducer;