import React, { useState } from 'react'
import './App.css';

function App() {

        const [input, setInput] = useState('')
        const calcBtns = [];
        [9,8,7,6,5,4,3,2,1,0,'.', '%'].forEach( (item) =>{
          calcBtns.push(
            <button
            onClick={(e)=>{
              setInput(input + e.target.value)
            }}
            value={item}
            key={item}
            >
              {''}
              {item}
            </button>
          )
        })

  return (
    <div className="wrapper">
      {''}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">

        {/* clear button */}
        <button
        onClick={()=> setInput(input.substr(0, input.length -1))}
        >
        Clear
        </button>

        {/* clear All */}

        <button
          onClick={(e) => setInput('')}
          value=''
        >
          AC
        </button>
      </div>
      <div className="operations subgrid">
        <button
        onClick={(e)=> setInput(input + e.target.value)}
        value='+'
        >
          +
        </button>

        <button
        onClick={(e)=> setInput(input + e.target.value)}
        value='-'
        >
          -
        </button>
        <button
        onClick={(e)=> setInput(input + e.target.value)}
        value='*'
        >
          *
        </button>
        <button
        onClick={(e)=> setInput(input + e.target.value)}
        value='/'
        >
          /
        </button>

        <button
        onClick={(e)=> setInput(input + e.target.value)}
        value='%'
        >
          %
        </button>

        {/* "=" button */}

        <button
          onClick={e => {
            try {
              setInput(
                  String(eval(input)).length > 3 &&
                  String(eval(input)).includes('.')
                  ? String(eval(input).toFixed(3))
                  : String(eval(input))
              )
            }catch (e) {
              console.log(e)
            }
          }}
        >
        =
        </button>

      </div>
    </div>
  )
}
export default App