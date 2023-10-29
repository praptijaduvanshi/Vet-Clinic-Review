import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import ClinicdetailPage from "./routes/ClinicDetailPage";
import { ClinicsContextProvider } from './context/ClinicsContext';

const App = () => {
  return (
    <ClinicsContextProvider>
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/clinics/:id/update' element={<UpdatePage/>} />
                <Route path='/clinics/:id' element={<ClinicdetailPage />} />
            </Routes>
        </Router>
    </div>    
    </ClinicsContextProvider>
    
  );
};

export default App