import React from 'react'
import Banner from './Banner'
import EmployersData from './EmployersData'
import NavBar from './NavBar'
import Paper from './Paper'
import ProfileCard from './ProfileCard'
import './WebSite.css'

function Website() {
  return (
    <div>
      <NavBar />
      <EmployersData />
      <Banner />
      <Paper />
      <div className='mt-3 profileCard' >
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </div>
  )
}

export default Website