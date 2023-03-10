import React from 'react'
import './WebSite.css'

function NavBar() {
  return (
    <div className = "menuBar d-flex justify-content-between" >
      <div className='' >Icon</div>
      <div className='d-flex' >
        <div class = "px-2" >Home</div>
        <div class = "px-2" >Know Us</div>
        <div class = "px-2" >
          <a class="nav-link dropdown-toggle" href="www.google.com" role="button" data-bs-toggle="dropdown">Academics</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="www.google.com">Link</a></li>
            <li><a class="dropdown-item" href="www.google.com">Another link</a></li>
            <li><a class="dropdown-item" href="www.google.com">A third link</a></li>
          </ul>
        </div>
        <div class = "px-2" >Admissions</div>
        <div class = "px-2" >Contact</div>
      </div>
    </div>
  )
}

export default NavBar