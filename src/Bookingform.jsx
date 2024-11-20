import React, { useState } from "react";
import './App.css';

const BookingForm = () => {
  const [form, setForm] = useState({
    Fueltype:'',
    OwnerType: '',
    Name: '',
    Mobile: '',
    Email: '',
    Vehicle_make: '',
    Vehicle_model: '',
    Vehicle_year: '',
    Engine_capacity: '',
    Vehicle_reg: '',
    Odometer: '',
    BookingDate: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
      New Booking:
      -  Fueltype : ${form.Fueltype}
      - Owner Type: ${form.OwnerType}
      - Name: ${form.Name}
      - Mobile: ${form.Mobile}
      - Email: ${form.Email}
      - Vehicle Make: ${form.Vehicle_make}
      - Vehicle Model: ${form.Vehicle_model}
      - Vehicle Year: ${form.Vehicle_year}
      - Engine Capacity: ${form.Engine_capacity}
      - Vehicle Reg: ${form.Vehicle_reg}
      - Odometer: ${form.Odometer}
      - Booking Date: ${form.BookingDate}
    `;

    const phoneNumber = ' +27725367143'; 
    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    
    window.open(whatsappLink, '_blank');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Your Details</h3>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <select
            name="OwnerType"
            value={form.OwnerType}
            onChange={handleChange}
            style={{ display: 'block', marginTop: '5px' }}
            required
          >
            <option value="">Please choose option</option>
            <option value="business">Business</option>
            <option value="private">Private</option>
          </select>
          <input
            value={form.Name}
            onChange={handleChange}
            name="Name"
            placeholder="Name & Surname"
            style={{ display: 'block', marginTop: '5px' }}
          />
          <input
            onChange={handleChange}
            name="Mobile"
            value={form.Mobile}
            placeholder="Mobile Number"
            style={{ display: 'block', marginTop: '5px' }}
          />
          <input
            onChange={handleChange}
            value={form.Email}
            name="Email"
            placeholder="Email address"
            style={{ display: 'block', marginTop: '5px' }}
          />
        </label>

        <label>
          <h3>Vehicle Details</h3>
          <h4>Valid Booking days are Monday - Friday</h4>
          <p>Preferred Booking date</p>
          <input
            onChange={handleChange}
            name="BookingDate"
            value={form.BookingDate}
            type="date"
            placeholder="yyyy/mm/dd"
          />
        </label>
      </div>

      <div>
        <h3>Vehicle Details</h3>
        <label style={{ display: "block", marginBottom: "10px" }}>
        <select
            name="Fueltype"
            value={form.Fueltype}
            onChange={handleChange}
            style={{ display: 'block', marginTop: '5px' }}
            required
          >
            <option value="">Please choose option</option>
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
          </select>
          <input
            onChange={handleChange}
            value={form.Vehicle_make}
            name="Vehicle_make"
            placeholder="Vehicle make"
            style={{ display: 'block', marginTop: '5px' }}
          />
          <input
            onChange={handleChange}
            value={form.Vehicle_model}
            name="Vehicle_model"
            placeholder="Vehicle model"
            style={{ display: 'block', marginTop: '5px' }}
          />
          <input
            onChange={handleChange}
            value={form.Vehicle_year}
            name="Vehicle_year"
            placeholder="Vehicle year"
            style={{ display: 'block', marginTop: '5px' }}
          />
          <input
            onChange={handleChange}
            value={form.Engine_capacity}
            name="Engine_capacity"
            placeholder="Engine capacity"
            style={{ display: 'block', marginTop: '5px' }}
          />
          <input
            onChange={handleChange}
            value={form.Vehicle_reg}
            name="Vehicle_reg"
            placeholder="Vehicle registration"
            style={{ display: 'block', marginTop: '5px' }}
          />
          <input
            onChange={handleChange}
            value={form.Odometer}
            name="Odometer"
            placeholder="Odometer"
            style={{ display: 'block', marginTop: '5px' }}
          />
        </label>

        <div style={{ margin: '55px' }}>
          <button className="Button1" type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
