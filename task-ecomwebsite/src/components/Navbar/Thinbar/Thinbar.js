import React from 'react'
import "./Thinbar.css"
import { BsBoxSeamFill } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Thinbar = () => {
  return (
    <div className="Thinbar-background">
      <h1 className='Thinbar-text'>SALE IS LIVE MIN 60% OFF*  &nbsp;<BsBoxSeamFill className='shipping-box'/></h1>
    </div>
  )
}

export default Thinbar
