import React from 'react'

function GoogleMaps() {
  return (
    <div>
      <h2 style={{color : "navy"}} >Google Maps</h2>
      <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5383.086730110065!2d78.45022694816733!3d17.439738027506905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1670127008177!5m2!1sen!2sin" width="400" height="400" style={{border : 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default GoogleMaps