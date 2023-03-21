import React from 'react'
import './points.css'
import {HiDotsHorizontal} from "react-icons/hi"

const Points = ({icon, title}) => {
  return (
    <div className="footer__points">
        <div className='points' >
            {icon = <HiDotsHorizontal width={22} height={3.67} color={'#FFCA42'} />}
        </div>
        <div className='footer__points-title' >{title}</div>
    </div>
  )
}

export default Points

