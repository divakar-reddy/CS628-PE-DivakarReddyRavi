import { useParams } from "react-router-dom";
const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities[id];

  return city ? (
    <div>
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  ) : (
    <p>City not found</p>
  );
};

export default CityDetails;