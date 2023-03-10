import React, {useState} from 'react'

function ZoomImage() {
  const [zoomIng, setZoomIng] = useState(100);
  const [timerId, setTimerId] = useState(null);
  const [decTimerId, setDecTimerId] = useState(null)
  const incZoomHandle = () => {
    setTimerId(setInterval( () => setZoomIng(prev => prev + 10) , 10)) 
  }
  const decZoomHandle = () => {
    setDecTimerId(setInterval( () => setZoomIng(prev => prev - 10) , 10))  
  }
  const incClear = () => {
    console.log("off")
    clearInterval(timerId)
  }
  const decClear = () => {
    clearInterval(decTimerId)
  }
  return (
    <div>
      <div style={{display : "flex", justifyContent : "center", gap : "20px", marginTop : "30px"}} >
        <button onMouseOver={incZoomHandle} onMouseLeave = {incClear} >Zoom In</button>
        <button onMouseOver={decZoomHandle} onMouseLeave = {decClear} >Zoom Out</button>
      </div>
      <div style={{display : "flex", justifyContent : "center", marginTop : "30px"}}>
        <img width={zoomIng > 0 ? zoomIng : "10"} height={zoomIng > 0 ? zoomIng : "10"} src ="https://www.shutterstock.com/image-photo/man-kitchen-searching-recipes-on-600w-271173800.jpg" alt = "zoom" />
      </div>
      <div style={{height : "100vh", backgroundColor : "beige"}} >
          <h1 draggable="true">Draggable</h1>
          <h1>Non draggalbe</h1>
      </div>
    </div>
  )
}

export default ZoomImage