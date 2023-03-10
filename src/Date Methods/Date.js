import React from 'react'

function Date() {
  const dateChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <div>
      <input type = "date" onChange={dateChange} />
    </div>
  )
}

export default Date