import React from 'react'
import Banner from './Banner/Banner'
import BannerHoverImages from './BannerHoverImages/BannerHoverImages'
import Corousel from './Corousel/Corousel'

function Body() {
  return (
    <div>
      <Corousel />
      <Banner />
      <BannerHoverImages />
    </div>
  )
}

export default Body