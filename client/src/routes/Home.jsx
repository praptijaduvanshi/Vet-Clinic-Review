import React from 'react';
import Header from '../components/Header';
import AddClinic from '../components/AddClinic';
import ClinicList from '../components/ClinicList';

const Home = () => {
  return (
    <div>
        <Header/>
        <AddClinic />
        <ClinicList />
    </div>
  )
}

export default Home