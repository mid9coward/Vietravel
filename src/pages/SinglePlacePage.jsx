import React from "react";
import { placesToGo } from "../data"; // Importing the data that contains the places to visit
import { useParams } from "react-router-dom"; // Importing useParams to extract route parameters
import ImageHeader from "../components/ImageHeader"; // Importing a custom component for displaying images

const SinglePlacePage = () => {
  const { id } = useParams(); // Extracting the 'id' parameter from the URL
  const place = placesToGo.find((p) => {
    return p.name === id; // Finding the place in the data that matches the 'id' from the URL
  });

  // Destructuring the properties of the selected place
  const { name, imageSrc, places } = place;

  return (
    <section className="section">
      <div className="section-center">
        <ImageHeader img={imageSrc} />{" "}
        {/* Displaying the main image using the ImageHeader component */}
        <article className="article-container">
          {/* Displaying the name of the place */}
          <h2 className="text-center text-3xl sm:text-4xl italic font-bold">
            {name}
          </h2>

          {/* Subtitle indicating the best places to visit in the selected location */}
          <h3 className="text-center text-xl sm:text-2xl mt-2">
            Best places to visit in {name}
          </h3>

          {/* Looping through the 'places' array and displaying details for each place */}
          {places.map((pl, index) => {
            const { id, name, description, images } = pl;
            return (
              <div className="tip-container" key={id}>
                {" "}
                {/* Key is set to ensure React efficiently updates the list */}
                {/* Displaying the place's name with an index number */}
                <h3 className="tip-title">
                  {index + 1}- {name}
                </h3>
                {/* Looping through the description array and displaying each paragraph */}
                {description?.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
                {/* Looping through images array and displaying each image */}
                {images.map((img) => (
                  <img key={img.id} src={img.imageSrc} alt={name}></img>
                ))}
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default SinglePlacePage; // Exporting the component for use in other parts of the application
