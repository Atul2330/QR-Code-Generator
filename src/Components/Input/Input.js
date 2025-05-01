import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Input() {
  const [input,setInput]=useState('')
  const navigate=useNavigate();

  const handleGenerate=()=>{
    navigate('./result',{state:{input}});
  }
  return (
    <div>
        <input type="text" placeholder='Link or text to be converted to QR' class="form-control"
        onChange={(e)=>setInput(e.target.value)}/>
        <br/>
        <button 
          class="btn btn-success"
          onClick={handleGenerate}>
            Generate QR
        </button>
    </div>
  )
}

export default Input