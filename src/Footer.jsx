import React from 'react';
import wantacar from '../src/assets/Want a Car with office cell.jpg';

const Footer_contact = [
  {
    id: 1,
    title: 'Branch Trading Hours',
    WorkingHours:`Monday – Friday: 08h00 – 17h00
      Saturdays: 08h00 – 13h00
      Sundays: Closed`,
    description: 'If you need consultation with us, you can write a message or call us, we will respond as quickly as possible.',
    email: 'admin@wantacar.co.za',
    tel: '0349402605',
    sales_mobile: '0663335467',
    service_booking: '0796602975',
    address: '239 Acasia Street, Pongola, South Africa',
    background: wantacar, 
  },

];

function Footer() {
  return (
    <div>
      <div className="frame329">
        {Footer_contact.map(({ name,WorkingHours, id, title, description, email, tel, service_booking, sales_mobile, address, background }) => (
          <div key={id} className="contact-section">
            <img src={background}  className="contact-image" />
            <h1 className="contactus">{title}</h1>
            <p className='textBlock10'>{WorkingHours}</p>
           
            <p className="textstyle">
              Email: <a style={{ textDecoration: 'none', color: '#333' }} href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="textstyle">{name}</p>
            <p className="textstyle">Tel: {tel}</p>
            <p className="textstyle">Sales Mobile: {sales_mobile}</p>
            <p className="textstyle">Service Booking: {service_booking}</p>
            <p className="textstyle">Address: {address}</p>
          </div>
        ))}
      </div>
      <div className="frame330">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.873455912287!2d31.602643875455772!3d-27.379667176371886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeff5cd9f6bceb5%3A0xd5e405d6fbc2e46a!2sWANT%20A%20CAR%20PONGOLA!5e0!3m2!1sen!2sza!4v1729194554622!5m2!1sen!2sza"
          style={{ width: '100%', height: '400px', border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
