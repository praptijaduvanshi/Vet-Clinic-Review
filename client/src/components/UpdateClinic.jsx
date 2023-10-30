import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ClinicsContext } from '../context/ClinicsContext';
import ClinicFinder from '../apis/ClinicFinder';
import { useNavigate } from 'react-router-dom';

const UpdateClinic = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { clinics } = useContext(ClinicsContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [openHours, setOpenHours] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [establishedDate, setEstablishedDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await ClinicFinder.get(`/${id}`);
      const clinicData = response.data.data.clinic;

      setName(clinicData.name);
      setAddress(clinicData.address);
      setCity(clinicData.city);
      setState(clinicData.state);
      setOpenHours(clinicData.open_hours);
      setPhoneNumber(clinicData.phone_number);
      setEmail(clinicData.email);
      setEstablishedDate(new Date(clinicData.established_date));
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedDate = format(establishedDate, 'MM/dd/yyyy');

    const updatedClinic = await ClinicFinder.put(`/${id}`, {
      name,
      address,
      city,
      state,
      open_hours: openHours,
      phone_number: phoneNumber,
      email,
      established_date: formattedDate,
    });
    navigate(`/`);
  };

  return (
    <div>
      <form className="p-4">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name">Clinic Name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Clinic Name"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="address">Address</label>
            <input
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Address"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="city">City</label>
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              className="form-control"
              id="city"
              placeholder="Enter City"
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <input
              value={state}
              onChange={(event) => setState(event.target.value)}
              type="text"
              className="form-control"
              id="state"
              placeholder="Enter State"
              required
            />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="openHours">Open Hours</label>
            <select
              value={openHours}
              onChange={(event) => setOpenHours(event.target.value)}
              className="custom-select"
              id="openHours"
              required
            >
              <option value="" disabled>
                Select Open Hours
              </option>
              <option value="Mon-Fri: 9 AM - 5 PM">Mon-Fri: 9 AM - 5 PM</option>
              <option value="Mon-Sun: 9 AM - 5 PM">Mon-Sun: 9 AM - 5 PM</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter Phone Number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="establishedDate">Established Date</label>
            <div className="input-group">
              <DatePicker
                selected={establishedDate}
                onChange={(date) => setEstablishedDate(date)}
                dateFormat="MM/dd/yyyy"
                className="form-control"
                id="establishedDate"
                placeholderText="Select Established Date"
                required
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="far fa-calendar-alt"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-primary">
          Update Clinic
        </button>
      </form>
    </div>
  );
};

export default UpdateClinic;
