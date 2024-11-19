import React from 'react'
import BookingForm from './Bookingform'
function BookingAppointment() {
  return (
    <div className="booking-appointment-container">
    <div className="booking-content">
      <h1>
        BOOK A <span className="highlight"> QUICK SERVICE</span>
      </h1>
      <p className="fill-form">
        Fill in the form below and one of our branch representatives will call
        you back as soon as possible.
      </p>
      <BookingForm />
    </div>
  </div>
  )
}

export default BookingAppointment