import React from "react";

const AppointmentCards = ({ bookedData }) => {
  return (
      <div className="col-md-4 mb-5">
        <div className="card p-4">
          <div className="card-body text-center">
            <h5 className="card-title text-brand">{bookedData.subject}</h5>
            <p className="card-text">
              {bookedData.visitingHour}
            </p>
            <p className="card-text">Space: {bookedData.totalSpace}</p>
            <button className="btn btn-primary text-uppercase">
              Go somewhere
            </button>
          </div>
        </div>
      </div>
  );
};

export default AppointmentCards;
