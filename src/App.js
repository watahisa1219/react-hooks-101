import React, { useEffect, useState } from 'react'

const App = props => {


  const [state, setState] = useState(props)
  const {name , price } = state

  // class componentの作り方をfunciton componentで再現

  // componentDidMount ＆ ompornentDidUpdate
  useEffect(() => {
    console.log('This is like componentDidMount or compornentDidUpdate.')
  })

  // componentDidMount
  useEffect(() => {
    console.log('This is like componentDidMount')
  },[])

  // 特定のパラメータの描画時、変更時のみに実行させるための書き方
  // (例)nameが描画や変更時に実行されるuseEffect
  useEffect(() => {
    console.log('This is callback is for name only')
  },[name])

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