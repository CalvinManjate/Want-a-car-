import React from 'react'
import key1 from '../src/assets/7.png'
import key2 from '../src/assets/8.png'
import './App.css'

const Acreddited_info = [
    
    {id:1,
        svgicon: key1,
    title: 'Retail Motor Industry Organisation',
    description: 'Want-a-car is a member of the Retail Motor Industry Organisation (RMI). As a member, Want-a-car abides by the Code of Conduct, which applies to customer and staff-related issues.'
    },
    {
        id:2,
        svgicon: key2,
        title: 'Retail Motor Industry Organisation',
        description: 'Want-a-car is a member of the Retail Motor Industry Organisation (RMI). As a member, Want-a-car abides by the Code of Conduct, which applies to customer and staff-related issues.'
        },


];


function Accredited() {
  return (
    <div style={{position:'absolute',top:'390%', padding:'0 12%'}}>
    <div className='membership'>
    <h1>Our <span>Membership</span></h1>

    </div>
    <div className='movecredit'>
    <div className='Acreddited' >
        
        
        {Acreddited_info.map(({id,svgicon,title,description})=>(
            <div key={id} 
            >
                <div className='back'>
                <img src={svgicon} />
                </div>
                
                <h2 style={{fontFamily:`'Montserrat', sans-serif`,fontSize:'16px' ,width:'100%'}}>{title}</h2>
                <p style={{fontFamily:`'Montserrat', sans-serif`}}>{description}</p>
            </div>
        ))}
    </div>
    </div>
  
    </div>
  )
}

export default Accredited