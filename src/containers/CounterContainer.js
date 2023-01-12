import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

export default function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 hook이다
  // state값은 store.getState 함수를 나타나는 결과물과 동일하다
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  //useDispatch는 redux store의 dispatch를 함수에서 사용하기 위한 hook이다
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}