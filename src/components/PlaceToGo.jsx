import React from "react"; // Import React for building components
import { Link } from "react-router-dom"; // Import Link for navigation

// Component definition: Accepts `place` and `half` as props
const PlaceToGo = ({ place, half }) => {
  // Destructure `imageSrc` and `name` from the `place` object
  const { imageSrc, name } = place;

  return (
    // Link to a dynamic route based on the `name` of the place
    <Link
      to={`places/${name}`} // Constructs a URL like `/places/<name>`
      className={`${half ? "place-link-half" : ""} group place-link`} // Applies conditional styling
    >
      {/* Display the image of the place */}
      <img alt={name} className="place-img" src={imageSrc} />

      {/* Display the title of the place */}
      <div className="place-title font-expletus">
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default PlaceToGo; // Export the component for use in other files
