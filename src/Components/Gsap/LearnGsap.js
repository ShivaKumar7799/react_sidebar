import React, {useState, useEffect} from 'react'
import {gsap} from 'gsap'
import { Translate } from '@mui/icons-material'

function LearnGsap() {
  const onEnter = ({currentTarget}) => {
    console.log(currentTarget, "currentTarget")
    gsap.to(currentTarget, {
      backgroundColor : "red",
      transform : "TranslateX(50px)"
    })
  }
  const onLeave = ({currentTarget}) => {
    gsap.to(currentTarget,{
      backgroundColor : "green",
      transform : "TranslateX(-50px)"
    })
  }
  return (
    <div className='gsapContainer' >
      <div onMouseEnter={onEnter} onMouseLeave = {onLeave} className='gsapAnimation' >
        <span>GSAP ANIMATION</span>
      </div>
    </div>
  )
}

export default LearnGsap