import React from 'react'
import BannerCards from './BannerCards'

const bannerCardData = [
                        {
                          cardName : "Explore salons & services",
                          cardImage : "https://dasalonindia.com/wp-content/uploads/2020/12/01-01.png"
                        },
                        {
                          cardName : "Compare ratings, and prices",
                          cardImage : "https://dasalonindia.com/wp-content/uploads/2020/12/01-02.png"
                        },
                        {
                          cardName : "Book as per your convenience",
                          cardImage : "https://dasalonindia.com/wp-content/uploads/2020/12/01-03.png"
                        },
                        {
                          cardName : "Earn cashbacks and discount",
                          cardImage : "https://dasalonindia.com/wp-content/uploads/2020/12/01-04.png"
                        },
                        {
                          cardName : "Rate salons as per experience",
                          cardImage : "https://dasalonindia.com/wp-content/uploads/2020/12/01-05.png"
                        }
                       ]

function BannerHoverImages() {
  return (
    <div className='container bannerHoverImagesContainer' >
      {bannerCardData.map((item,index) => <BannerCards name = {item.cardName} image = {item.cardImage} />)}
    </div>
  )
}

export default BannerHoverImages