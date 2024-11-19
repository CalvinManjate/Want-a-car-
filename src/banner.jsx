import React from 'react'
import './App.css'

const bannerpa = [{
    id:1,
    title: "Check our ",
    link:'https://www.wantacar.co.za/home'   
}
]
function Banner() {
  return (
   <div>
   
    {bannerpa.map(({id,title,link})=>(
        <div key={id}

        className='customer_review'
        >
            <h2>{title}<span>Latest Vehicles</span></h2>
            <a href={link} className='link'>Check now</a>
        </div>
        
    ))}

   </div>
  )
}

export default Banner