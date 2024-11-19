import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Banner from './banner'
import TipsandHint from './Tips and hint'
import Footer from './Footer'
import Accredited from './accredited'
import SubscriptionTable from './Service'

function Home() {
  return (
    <div className='root'>
       <div className='map1'>
        </div>
        <div className='toyotaCamryHome1'>
        </div>

        <div className='rectangle158'>
                    <div className='bookYour'>
                        <h1 style={{margin:' 0 -5%'}}>
                          <h4 style={{margin:'1% 0'}}>Premium Car</h4> <span><span>Maintenance</span></span> & Repair <span><span>Solutions</span></span>
                         </h1>

                         <div className='frame13'>
                            <p className='WeHaveAQualifiedDieselMechanic'> Book your affordable car service with our RMI approved workshop now  -  we have a qualified diesel Mechanic and a diagnostic machine available for you.

 

We service Any make, Any model, Any time , Any where</p>
                         </div>
                    </div>
        </div>

        <div className='Button_container'>
               <Link to='/contact'><button className='Button1'>
                Get in Touch 
                </button></Link> 
                 <Link to='/BookingAppointment'>
                 <button className='Button2'>Book 
                 </button> </Link>
        
        </div>

        <div className='gETAMAJORSERVICE'> 
            <h1 >GET A <span>MAJOR SERVICE</span></h1>
            <p className='everyMajorServiceIncludesAComp'>
                Every major service includes a comprehensive 62-point check, all the standard new parts and replacements, various checks and tests, as well as value added services such as a FREE car wash and vacuum.
            </p>
            <button className='frame10'>See What's included</button>
       </div>

       <div >
            
    
            <SubscriptionTable/>
       </div>
       <div>
            <TipsandHint/>
        </div>
    
       <div>
        <Accredited/>
       </div>

       <div className='banner'>
            <div style={{position:'absolute', top:'50%'}}>
                <h1 className='bannerh2'>Check our</h1>
                <h1>Latest Vehicles</h1>
               <a href='https://www.wantacar.co.za/'><button>Check Now</button></a> 
            </div>
 
        </div>

        <div>
          <Footer/>
        </div>
    </div>
    
      
  )
}

export default Home