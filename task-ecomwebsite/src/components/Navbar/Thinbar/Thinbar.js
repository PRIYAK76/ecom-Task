import React from 'react'
import "./Thinbar.css"
import { BsBoxSeamFill } from "react-icons/bs";

const Thinbar = () => {
  return (
    <div className="Thinbar-background">
      <h1 className='Thinbar-text'>FREE SHIPPING ON EVERY ORDER &nbsp;<BsBoxSeamFill className='shipping-box'/></h1>
    </div>
  )
}

export default Thinbar
