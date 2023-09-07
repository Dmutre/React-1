import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Main() {
  const [num, setNum] = useState(15);

  const increase = () => {
    setNum(num+1);
  }
  
  console.log(num);
  return(
    <div>
    <Header num={num}/>
    Hello
    <button onClick={increase}>Hello button</button>
  </div>
  )
}

function Header({num}) {
  return (
    <header>Header {num}</header>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Main/>
);