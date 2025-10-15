import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  //useEffect? ==> hook use to do side-effect in react
  let [ws,setWs] = useState(null)
  let inputRef = useRef()   //store any dom element reference , and it is different from useState because it does not trigger re-rendering of a component 
  useEffect(()=>{
  let wss = new WebSocket("ws://localhost:8015")
  wss.onmessage=(e)=>{
    console.log(e.data);
  }  
  setWs(socket);

  },[])

  function sendMessage(){
    let message = inputRef.current.value
    ws.send(message)
    inputRef.current.value=""
  }


  return (
    <>
      <h1>Ping Pong</h1>
      <input ref={inputRef} type="text" />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
