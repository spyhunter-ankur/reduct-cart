import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getData } from '../../redux/actions/action'
import { decrement,  increment } from '../../redux/reducers/CounterSlice'
// import styles from './Counter.module.css'

export default function Counter() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
//   console.log(count);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}