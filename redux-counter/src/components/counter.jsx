import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from "../features/counterslice";



function Counter() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()


  return (
    <div className='main'>
      <h1>Counter App</h1>
     <button onClick={()=>dispatch(increment())}>+</button>
     <span>{count}</span>
     <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter