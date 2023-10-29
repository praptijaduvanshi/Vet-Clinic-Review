import React from 'react';

const ClinicList = () => {
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
          <tr>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClinicList;