
import React, { useState } from 'react'

const UserAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    
      <div>
        <h1 style={{color: isLoggedIn ? "yellowgreen" : "rgba(0, 0, 61, 1)"}}>{isLoggedIn? "Welcome!":"LOGINNNN"}</h1>
        <button className='BTNS' onClick={()=>handleClick()}>Toggle Login</button>
      </div>
  )
}

export default UserAuthentication