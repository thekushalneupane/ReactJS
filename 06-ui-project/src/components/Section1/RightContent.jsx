import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-5 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <div key={idx}>
          <RightCard
          id = {idx}
          img = {elem.img}
          tag = {elem.tag}
          color = {elem.color}
        />
        </div>
      })}
       
    </div>
  )
}

export default RightContent
