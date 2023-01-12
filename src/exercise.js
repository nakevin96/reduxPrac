import {createStore} from 'redux';

// createStore는 스토어를 만들어주는 함수이다.
// react project에서는 단 하나의 스토어를 만든다.

// 리덕스에서 관리할 상태
const initialState = {
    counter: 0,
    text: '',
    list: []
};

// action 정의
// action은 일반적으로 대문자
const INCREASE = "EXERCISE_INCREASE";
const DECREASE = "EXERCISE_DECREASE";
const CHANGE_TEXT = "EXERCISE_CHANGE_TEXT";
const ADD_TO_LIST = "EXERCISE_ADD_TO_LIST";

// action 생성 함수 정의
// 주로 camel case사용
const increase = () => {
    return {
        type: INCREASE // 액션 객체에 type은 필수다
    };
}

const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

// 리듀서 만들기
// 액션 생성 함수를 통해 만들어진 객체를 참조해
// 새로운 상태를 만드는 함수를 만들어보자.

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: [...state.list, action.item]
            }
        default:
            return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state)
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("hi"));
store.dispatch(addToList({id: 1, text: "lilpa"}));
