import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';

const App = () => {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <>
      <div className="TopBar">
        <h1 className="mt-0">Cities Application</h1>
        <nav className="mb-1">
          <Link to="/">Cities List</Link> | <Link to="/add">Add City</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<CitiesList cities={cities} />}>
          <Route path=":id" element={<CityDetails cities={cities} />} />
        </Route>
        <Route path="/add" element={<AddCity addCity={addCity} />} />

      </Routes>
    </>
  );
};

export default App;
