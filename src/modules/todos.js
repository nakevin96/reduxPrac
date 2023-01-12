// action type
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// action 생성 함수
let nextId = 2;
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

// 초기 state
// reducer의 초기상태는 꼭 객체일 필요는 없다. 배열이어도 되고 원시 타입이어도 된다
const initialState = [
  {
    id: 1,
    text: 'example',
    done: false,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);
    default:
      return state;
  }
}