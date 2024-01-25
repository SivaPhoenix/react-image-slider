import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { IoMdArrowDropright,IoMdArrowDropleft } from "react-icons/io";

function Slider(props) {
    const {url}=props
    const length =url.length-1
    const [index,setIndex]=useState(0)
    const handlePrev=()=>{
        index==0?setIndex(length):setIndex(index-1)
    }
    const handleNext=()=>{
        index==length?setIndex(0):setIndex(index+1)
    }
  return (
    <div className='main'>
        <div className='imgs'>
            <IoMdArrowDropleft className='icon' onClick={handlePrev}/>
            <img src={url[index]} alt='siva'/>
            <IoMdArrowDropright className='icon' onClick={handleNext}/>
        </div>
    <div className='bottombar'>
        {url.map((url,i)=>(<div onClick={()=>
     {setIndex(i)}} key={i} className={`bar ${index==i?'barWhite':''}`}>__</div>
     ))}
    </div>
    </div>
  )
}

export default Slider