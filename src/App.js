import React, { useState } from 'react'

const App = props => {


  const [state, setState] = useState(props)
  // stateの分割代入でstateの記述を短縮
  const {name , price } = state

  // return (
  //   <>
  //     <p>現在の{state.name}は{state.price}円です。</p>
  //     <button onClick={ () => setState({...state, price: state.price + 1}) }>+1</button>
  //     <button onClick={ () => setState({...state, price: state.price - 1}) }>-1</button>
  //     <button onClick={ () => setState(props) }>reset</button>
  //     <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
  //   </>
  // )


  // onClickの中が変数だった物をオブジェクトで持たせる
  return (
    <>
      <p>現在の{name}は{price}円です。</p>
      <button onClick={ () => setState({...state, price: price + 1}) }>+1</button>
      <button onClick={ () => setState({...state, price: price - 1}) }>-1</button>
      <button onClick={ () => setState(props) }>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}

// props設定の適用
App.defaultProps = {
  name: '',
  price: 1000
}

export default App