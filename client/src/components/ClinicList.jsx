import React, { useEffect, useContext } from "react";
import ClinicFinder from "../apis/ClinicFinder";
import { ClinicsContext } from "../context/ClinicsContext";

const ClinicList = (props) => {
  const {clinics, setClinics} = useContext(ClinicsContext)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await ClinicFinder.get("/");
      setClinics(response.data.data.clinics);
    } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="list-group" style={{ margin: '7px' }}>
      <table className="table table-hover table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col"> Clinic Name</th>
            <th scope="col"> Address</th>
            <th scope="col"> City</th>
            <th scope="col"> State</th>
            <th scope="col"> Open Hours</th>
            <th scope="col"> Phone No.</th>
            <th scope="col"> Email</th>
            <th scope="col"> Established On</th>
            <th scope="col"> Ratings</th>
            <th scope="col"> Edit</th>
            <th scope="col"> Delete</th>
          </tr>
        </thead>

        <tbody>
          {clinics && clinics.map((clinic) => {
            return (
            <tr key={clinic.id}>
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>{clinic.city}</td>
              <td>{clinic.state}</td>
              <td>{clinic.open_hours}</td>
              <td>{clinic.phone_number}</td>
              <td>{clinic.email}</td>
              <td>{clinic.established_date}</td>
              <td>Ratings</td>
              <td><button className="btn btn-info">Edit</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
            );
          })}
          {/*<tr>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td><button className="btn btn-info">Edit</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>*/}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicList;