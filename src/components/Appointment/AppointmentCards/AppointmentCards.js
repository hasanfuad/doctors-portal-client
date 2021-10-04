import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const AppointmentCards = ({ bookedData }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
      setIsOpen(false);
  }

  return (
      <div className="col-md-4 mb-5">
        <div className="card p-4">
          <div className="card-body text-center">
            <h5 className="card-title text-brand">{bookedData.subject}</h5>
            <p className="card-text">
              {bookedData.visitingHour}
            </p>
            <p className="card-text">Space: {bookedData.totalSpace}</p>
            <button onClick={openModal} className="btn btn-primary btn-brand text-uppercase">
              Book Appointment
            </button>
            <AppointmentForm modalIsOpen={modalIsOpen} modalIsClose={closeModal} bookedData={bookedData}/>
          </div>
        </div>
      </div>
  );
};

export default AppointmentCards;
