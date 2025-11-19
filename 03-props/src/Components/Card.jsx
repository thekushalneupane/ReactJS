import React from 'react'
//importing different names using props

const Card = (props) => {
  // console.log(props);
  
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, maxime.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
