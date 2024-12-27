import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./appointment.css";

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patientName: '',
    appointmentNo: '',
    appointmentDate: '',
    phone: '',
    gender: 'male',
    doctor: '',
    priority: 'medium',
    fee: '',
  });

  // Open the modal and calculate the next appointment number
  const openModal = () => {
    const nextAppointmentNo =
      appointments.length > 0
        ? Math.max(
            ...appointments.map((a) => parseInt(a.appointmentNo, 10) || 0) // Ensure numeric parsing with fallback
          ) + 1
        : 1; // Default to 1 if no appointments exist

    setFormData((prevFormData) => ({
      ...prevFormData,
      appointmentNo: nextAppointmentNo.toString(), // Convert to string for form input
    }));

    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Fetch appointments from the backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/appointments', formData);
      console.log('Appointment added:', response.data);

      // Add new appointment locally for immediate UI update
      setAppointments((prevAppointments) => [...prevAppointments, formData]);

      closeModal();
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <div className='appoint'>
      <h1>Appointment</h1>
      <div className='ch'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className='he'>Appointment Details</h3>
          <button className='appointment-button' onClick={openModal}>
            Add Appointment
          </button>
        </div>
        <hr />

        <table className="appointments-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Appointment No.</th>
              <th>Appointment Date</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Doctor</th>
              <th>Priority</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.patientName}</td>
                <td>{appointment.appointmentNo}</td>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.priority}</td>
                <td>{appointment.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>New Appointment</h2>
            <form onSubmit={handleSubmit}>
              <label>Patient Name:</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                placeholder="Enter patient name"
                required
              />

              <label>Appointment No:</label>
              <input
                type="text"
                name="appointmentNo"
                value={formData.appointmentNo}
                readOnly
              />

              <label>Appointment Date:</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleInputChange}
                required
              />

              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                required
              />

              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label>Doctor:</label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                placeholder="Enter doctor's name"
                required
              />

              <label>Priority:</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <label>Fee:</label>
              <input
                type="number"
                name="fee"
                value={formData.fee}
                onChange={handleInputChange}
                placeholder="Enter fee amount"
                required
              />

              <div className="modal-actions">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;