import React from "react"; // Import React to enable JSX syntax and component creation
import { SectionTitle } from "../components"; // Import a reusable SectionTitle component
import { placesToGo } from "../data"; // Import data for places to visit
import PlaceToGo from "./PlaceToGo"; // Import a component for rendering a single place
import SectionIntro from "./SectionIntro"; // Import a component for rendering section introduction

const PlacesToGo = () => {
  return (
    <>
      {/* Main section with a white background and an ID for navigation */}
      <section className="section bg-white" id="places">
        {/* Section title, dynamically rendered using a reusable component */}
        <SectionTitle title="places to go" />

        {/* Section content container */}
        <div className="section-center ">
          {/* Section introduction with a title and introductory text */}
          <SectionIntro
            title="Explore the best places in Vietnam"
            intro=" Choose from the best holiday destinations in Vietnam. And best of
              all, it’s quarantine-free for the fully vaccinated. You are free
              to enjoy full holiday access upon arrival. Take in new sites,
              sounds, and flavors. Experiences that are truly memorable. Live
              fully in Vietnam."
          />

          {/* Container for displaying the list of places */}
          <div className="flex flex-wrap md:-m-2 -m-1">
            {/* First half of the places list */}
            <div className="places-container">
              {placesToGo.slice(0, 3).map((place, index) => (
                <PlaceToGo
                  key={place.id} // Assign unique key for each place
                  place={place} // Pass place data as a prop
                  half={index !== placesToGo.slice(0, 3).length - 1} // Determine if this is the last item in the first half
                />
              ))}
            </div>

            {/* Second half of the places list */}
            <div className="places-container">
              {placesToGo.slice(3, placesToGo.length).map((place, index) => (
                <PlaceToGo
                  key={place.id} // Assign unique key for each place
                  place={place} // Pass place data as a prop
                  half={index !== 0} // Determine if this is the first item in the second half
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacesToGo; // Export the component for use in other parts of the application
