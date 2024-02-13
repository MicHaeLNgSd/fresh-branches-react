import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../../store/slices/counterSlice'

function Counter ({ dispatch, count }) {
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Counter)
