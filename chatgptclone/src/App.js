
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'; 
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';
function App() {
  const [ input, setInput] = useState(""); 
  const handleSend = async ()=> { 
    const res = await sendMsgToOpenAI(input);
    console.log(res)
  }

  return (
    <div className="App">
      <div className="canvas"> 
          <div className="mainTextinput">
          <input type="text" className="textinput" value={input} onChange={ (e) => {setInput(e.target.value)}}/>
          <button className='mainBtn' onClick={handleSend}> Send question </button>
          <input type='text' className='textouput'></input>
          </div>
  
      </div>
    </div>

  );
}

export default App;
