import React from 'react'

import "./logo.css"

function Logo() {
  
    const handleToggle = ( )=>{
        document.body.classList.toggle('toggle-sidebar');
    }


  return (
    <div className='d-flex align-items-center justify-content-between' >
          <a href="/" className='logo d-flex align-items-center ' > 
               <span className='d-none d-lg-block '> dashboard </span>
          </a>
          <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggle} > </i>
    </div>
  )
}

export default Logo
