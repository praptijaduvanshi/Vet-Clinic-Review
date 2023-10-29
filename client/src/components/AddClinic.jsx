import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns'; // Import the format function from date-fns
import ClinicFinder from '../apis/ClinicFinder';
import { ClinicsContext } from '../context/ClinicsContext';

const AddClinic = () => {
    const {addClinics} = useContext(ClinicsContext);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [openHours, setOpenHours] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [establishedDate, setEstablishedDate] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formattedDate = format(establishedDate, 'MM/dd/yyyy');
        try {
            const response = await ClinicFinder.post("/", {
                name,
                address,
                city,
                state,
                open_hours: openHours,
                phone_number: phoneNumber,
                email,
                established_date: formattedDate,
            });
            addClinics(response.data.data.clinic);
            console.log(response.data.data);
        } catch (error) {
            
        }
    }

  return (
    <div className='mb-4'>
      <form className="needs-validation mx-2" noValidate>
        
        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={event => setName(event.target.value)} type="text" className="form-control" id="name" placeholder="Enter Clinic Name" required />
                <div className="invalid-feedback">Name is required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="address">Address</label>
                <input value={address} onChange={event => setAddress(event.target.value)} type="text" className="form-control" id="address" placeholder="Enter Address" required />
                <div className="invalid-feedback">Address is required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="city">City</label>
                <input value={city} onChange={event => setCity(event.target.value)} type="text" className="form-control" id="city" placeholder="Enter City" required />
                <div className="invalid-feedback">City is required.</div>
            </div>
        </div>

        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <input value={state} onChange={event => setState(event.target.value)} type="text" className="form-control" id="state" placeholder="Enter State" required />
                <div className="invalid-feedback">State is required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="openHours">Open Hours</label>
                <select value={openHours} onChange={event => setOpenHours(event.target.value)} className="custom-select" id="openHours" required>
                    <option value="" disabled>Select Open Hours</option>
                    <option value="Mon-Fri: 9 AM - 5 PM">Mon-Fri: 9 AM - 5 PM</option>
                    <option value="Mon-Sun: 9 AM - 5 PM">Mon-Sun: 9 AM - 5 PM</option>
                    {/* Add more options as needed */}
                </select>
            <div className="invalid-feedback">Open Hours are required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="phone">Phone Number</label>
                <input value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} type="tel" className="form-control" id="phone" placeholder="Enter Phone Number" pattern="[0-9]{10}" required />
                <div className="invalid-feedback">Please enter a valid 10-digit phone number.</div>
            </div>
        </div>

        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" className="form-control" id="email" placeholder="Enter Email" required />
                <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="establishedDate">Established Date</label>
                <div className="input-group">
                    <DatePicker
                        selected={establishedDate}
                        onChange={date => setEstablishedDate(date)}
                        dateFormat="MM/dd/yyyy"
                        className="form-control"
                        id="establishedDate"
                        placeholderText="Select Established Date"
                        required
                    />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i> {/* You can use a calendar icon */}
                        </span>
                    </div>
                </div>
                <div className="invalid-feedback">Established Date is required.</div>
            </div>
        </div>
        
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add Clinic</button>
      </form>
    </div>
  );
}

export default AddClinic;
