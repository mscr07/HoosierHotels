
import { useState, useEffect } from "react";
import axios from "axios";

function LandingPage() {
  const [places, setPlaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch places from backend API
    axios
      .get("/api/places")
      .then((response) => setPlaces(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle search logic
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      {/* <img
        src="https://example.com/hotel-booking-system.png"
        alt="Hotel booking system"
      /> */}
      {/* <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for hotels"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}
      {/* <ul>
        {Array.isArray(places) &&
          places.map((place) => (
            <li key={place.id}>
              {place.name} - {place.city}, {place.state}
            </li>
          ))}
      </ul> */}
      {/* <footer>
        <p>
          Copyright &copy; 2023
          <a href="https://example.com">Hotel Booking System</a>
        </p>
      </footer> */}
    </div>
  );
}

export default LandingPage;
