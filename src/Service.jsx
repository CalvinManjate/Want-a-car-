import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo1 from '../src/assets/ivanKazlouskijPJiZUJV0MgwUnspl.jpeg';
import logo2 from '../src/assets/danGoldKARZuSYMfrAUnsplash.jpeg';
import logo3 from '../src/assets/pexelsAudriusStrikaitis1118748.jpeg';

import key2 from '../src/assets/Trip.svg';
import key from '../src/assets/Keyicon.svg';
import key3 from '../src/assets/Agenticon.svg';
import './App.css';

const subscriptionData = [
  { 
    id: 1, 
    Svgicon: key,
    plan: 'Get an instant Quote',
    service: 'Bookings',
    billingCycle: 'Monthly',
    price: '$100',
    link: '/BookingAppointment',
    background: `linear-gradient(rgba(7, 6, 7, 0.8), rgba(7, 6, 7, 0.8)), url(${logo1})`,
  },
  { 
    id: 2, 
    Svgicon: key3,
    service: 'Book Now',
    plan: 'Contact Us now',
    billingCycle: 'Yearly',
    price: '$800',
    link: '/contact',
    background: `linear-gradient(rgba(7, 6, 7, 0.8), rgba(7, 6, 7, 0.8)), url(${logo2})`,
  },
  { 
    id: 3, 
    Svgicon: key2,
    service: 'Cloud Hosting',
    plan: 'Give us a Feeback',
    billingCycle: 'Monthly',
    price: '$50',
    link: 'https://wa.me/+27683859712?text=hi%20my%20name%20is..',
    background: `linear-gradient(rgba(7, 6, 7, 0.8), rgba(7, 6, 7, 0.8)), url(${logo3})`,
  },
];

const SubscriptionTable = () => {
  return (
    <div className="optionlist" style={{ width: '100%', height: 'auto', position: 'absolute', top: '190%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 10%' }}>
        <h2 style={{ font: 'icon', fontSize: '150%', fontWeight: 'light', fontFamily: `'Montserrat', sans-serif` }}>
          WHAT WOULD YOU LIKE TO DO?
        </h2>
      </div>
  
      <div className="subscription-container">
        {subscriptionData.map(({ id, service, plan, billingCycle, price, background, Svgicon, link }) => (
          <Link to={link} key={id} style={{ textDecoration: 'none' }}> 
          <a 
            href={link} 
            target={id === 3 ? "_blank" : undefined} // Open WhatsApp in a new tab
            rel="noopener noreferrer" 
            key={id} 
            style={{ textDecoration: 'none' }}
          />
            <div 
              className="bozies"
              style={{ 
                margin: '10%',
                width: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10%',
                padding: '25% 15%',
                borderRadius: '2%',
                background: background,
                color: 'white',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >   
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5%', width: '100%' }}>
                <p style={{ font: 'icon', fontSize: '120%', fontWeight: '500', fontFamily:`'Montserrat', sans-serif`}}>{plan}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionTable;
