import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function arrange() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default arrange;
