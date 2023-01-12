// root reducer 만들기
// 현재 2개의 리덕스 모듈을 만들었기 때문에 리듀서도 2개이다.
// 한 프로젝트에 여러 리듀서가 존재하면 하나로 합쳐서 사용해야 한다.
import {combineReducers} from "redux";
import counter from './counter';
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;