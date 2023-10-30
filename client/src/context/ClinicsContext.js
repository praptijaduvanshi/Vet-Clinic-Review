import React, { useState, createContext } from "react";

export const ClinicsContext = createContext();

export const ClinicsContextProvider = props => {

    const [clinics, setClinics] = useState([]);
    const [selectedClinic, setSelectedClinic] = useState(null);
   
    const addClinics = (clinic) => {
        setClinics([...clinics, clinic]);
    };

    
    return(
        <ClinicsContext.Provider value={{clinics, setClinics, addClinics, selectedClinic, setSelectedClinic }}>
            {props.children}
        </ClinicsContext.Provider>

    );
};