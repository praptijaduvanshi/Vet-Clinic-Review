import React, { useState, createContext } from "react";

export const ClinicsContext = createContext();

export const ClinicsContextProvider = props => {

    const [clinics, setClinics] = useState([]);


    return(
        <ClinicsContext.Provider value={{clinics: clinics, setClinics }}>
            {props.children}
        </ClinicsContext.Provider>

    );
};