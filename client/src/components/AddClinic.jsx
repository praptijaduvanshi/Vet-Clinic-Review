import React from 'react';

const AddClinic = () => {
  return (
    <div className='mb-4'>
      <form className="needs-validation mx-2" noValidate>
        
        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Clinic Name" required />
                <div className="invalid-feedback">Name is required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter Address" required />
                <div className="invalid-feedback">Address is required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter City" required />
                <div className="invalid-feedback">City is required.</div>
            </div>
        </div>

        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <input type="text" className="form-control" id="state" placeholder="Enter State" required />
                <div className="invalid-feedback">State is required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="openHours">Open Hours</label>
                <select className="custom-select" id="openHours" required>
                    <option value="" disabled>Select Open Hours</option>
                    <option value="Mon-Fri: 9 AM - 5 PM">Mon-Fri: 9 AM - 5 PM</option>
                    <option value="Mon-Sun: 9 AM - 5 PM">Mon-Sun: 9 AM - 5 PM</option>
                    {/* Add more options as needed */}
                </select>
            <div className="invalid-feedback">Open Hours are required.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter Phone Number" pattern="[0-9]{10}" required />
                <div className="invalid-feedback">Please enter a valid 10-digit phone number.</div>
            </div>
        </div>

        <div className="form-row">
            <div className="col-md-4 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" required />
                <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="establishedDate">Established Date</label>
                <input type="date" className="form-control" id="establishedDate" placeholder="Select Established Date" required />
                <div className="invalid-feedback">Established Date is required.</div>
            </div>
        </div>

        <button className="btn btn-primary">Add Clinic</button>
      </form>
    </div>
  );
}

export default AddClinic;
