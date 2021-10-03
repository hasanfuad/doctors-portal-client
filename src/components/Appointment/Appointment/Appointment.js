import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
    }
    return (
        <div>
            <Navbar/>
            <AppointmentHeader handleDateChange={handleDateChange}/>
            <AvailableAppointments date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;