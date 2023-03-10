import React from 'react'
import './BannerHoverImages.css'

function BannerCards({name, image}) {
  return (
    <div className='bannerCardContainer' >
      <img src={image} alt = "bannerScissor" />
      <h4 class="title bannerCardTitle">
        {name}
      </h4>
    </div>
  )
}

export default BannerCards