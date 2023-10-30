import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClinicFinder from '../apis/ClinicFinder';
import { ClinicsContext } from '../context/ClinicsContext';
import StarRating  from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReviews from '../components/AddReviews';

const ClinicdetailPage = () => {
  const {id} = useParams();
  const {selectedClinic, setSelectedClinic} = useContext(ClinicsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClinicFinder.get(`/${id}`);
        setSelectedClinic(response.data.data);
        console.log(response)
      } catch (error) {
        console.log(error)        
      }      
    };

    fetchData();
  },[]);

  return (
    <div className="text-center">
      <h1 className="font-weight-light display-4">
        Vet Clinic Details
      </h1>

      {selectedClinic && (
        <div className="mx-auto mt-4">
          <h2 className="font-weight-light display-5 text-xl">
            {selectedClinic.clinic.name}
          </h2>

          <div className="d-flex justify-content-center align-items-center mt-2">
            <div className="mr-2">
              <StarRating rating={selectedClinic.clinic.average_rating} />
            </div>
            <div className="text-warning">
              {selectedClinic.clinic.count ? `(${selectedClinic.clinic.count})` : "(0)"}
            </div>
          </div>

          <div className="mt-4 mx-auto">
            <Reviews className="mx-auto" reviews={selectedClinic.reviews} />
          </div>

          <div className="col-md-8 mx-auto mt-4">
            <AddReviews />
          </div>
        </div>
      )}
    </div>


  )
}

export default ClinicdetailPage