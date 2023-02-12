import React, { useState } from 'react'

const App = props => {

// props適用前
// const App = () => {
//   const initialStatus = {
//     name: '',
//     price:1000
//   }

// const [name, setName] = useState(initialStatus.name)
// const [price, setPrice] = useState(initialStatus.price)

  // props適用後
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <>
      <p>現在の{name}は{price}円です。</p>
      <button onClick={ () => setPrice(price + 1) }>+1</button>
      <button onClick={ () => setPrice(price - 1) }>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={event => setName(event.target.value)}/>
    </>
  )
}

// props設定の適用
App.defaultProps = {
  name: '',
  price: 1000
}

export default App