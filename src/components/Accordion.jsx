import React, { useState } from "react"; // Import React and useState for state management

// Accordion component that takes title, info, and active as props
const Accordion = ({ title, info, active }) => {
  const [showInfo, setShowInfo] = useState(active); // State to track if the accordion is open or closed

  // Function to toggle the visibility of the accordion content
  const toggleQuestion = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="">
      {/* Header section with title and toggle button */}
      <header className="flex justify-between items-center bg-gray-100 mb-4 p-4 text-lg sm:text-xl md:text-2xl font-semibold">
        <h4>{title}</h4> {/* Display title */}
        <button onClick={toggleQuestion}>
          {" "}
          {/* Button to toggle content */}
          {showInfo ? (
            // Minus icon when the accordion is open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            // Plus icon when the accordion is closed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Render special itinerary format if title is "Itinerary" */}
      {showInfo &&
        title === "Itinerary" &&
        info.map((i, index) => {
          return (
            <div key={index} className="px-1">
              <h3 className="mt-4 text-lg font-bold">
                <span>Day {index + 1}: </span>
                {i.highLight} {/* Display the day's highlight */}
              </h3>
              {/* Render detailed itinerary for the day */}
              {i.details.map((de, ind) => (
                <p key={ind} className="my-3">
                  🧳{de} {/* Suitcase emoji before each detail */}
                </p>
              ))}
            </div>
          );
        })}

      {/* Render a simple list if title is not "Itinerary" */}
      {showInfo && title !== "Itinerary" && (
        <ul className="list-disc">
          {info.map((i, index) => {
            return (
              <li key={index} className="my-2 ml-6 px-1">
                {i} {/* Display list item */}
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
};

export default Accordion; // Export Accordion component
