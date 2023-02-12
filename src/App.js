// useStateの勉強
import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(10)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)

  const double = () => setCount(count * 2)

  // ① 通常のif 処理
  // const devide3 = () => setCount(previousCount => {
  //   if(previousCount % 3 === 0){
  //     return previousCount / 3
  //   }else{
  //     return previousCount
  //   }
  // })

  // ②if省略 三項演算子
  // const devide3 = () => setCount(previousCount => {
  //   return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  // })

  // ③return 波カッコ省略
  const devide3 = () => setCount(previousCount =>
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )


  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={devide3}>3の倍数の時だけ割る</button>
      </div>
    </>
  )
}

export default App