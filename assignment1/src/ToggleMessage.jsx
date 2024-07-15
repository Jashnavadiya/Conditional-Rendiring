
import React from 'react'
import { useState } from 'react'



const ToggleMessage = () => {
    const [isToggled, setIsToggled] = useState(false)
  return (
      <>
        <h1 style={{color:isToggled ? "green" : "rgba(0, 0, 61, 1)"}}>{ isToggled ? "Hey There" : "it's hidden"}</h1>
        <button className='BTNS' onClick={() => setIsToggled(!isToggled)}>Toggle Message</button>
      </>
  )
}

export default ToggleMessage