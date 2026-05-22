import React from "react";
import { Link, Outlet } from 'react-router-dom';
const CitiesList = ({ cities }) => {
  return (
    <div>
      <h2>Cities List</h2>
      {cities.map((city, index) => (
        <p key={index}>
          <Link to={`/${index}`}>{city.name}</Link>
        </p>
      ))}
      <Outlet />
    </div>
  );
};


export default CitiesList;