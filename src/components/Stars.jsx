import React from "react";

const Stars = ({ stars }) => {
  // Create an array of 5 elements to represent the stars
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const oneStar = index + 1; // Threshold for a full star
    const halfStar = index + 0.5; // Threshold for a half star

    return (
      <span key={index}>
        {stars >= oneStar ? (
          // Full Star: Render a fully filled yellow star if `stars` is greater than or equal to `oneStar`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : stars >= halfStar ? (
          // Half Star: Render a half-filled star if `stars` is greater than or equal to `halfStar`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="url(#half)" // Apply the gradient fill for a half star
          >
            <defs>
              {/* Define a linear gradient for the half star */}
              <linearGradient id="half">
                <stop offset="50%" stopColor="#facc15" />{" "}
                {/* Left side yellow */}
                <stop offset="50%" stopColor="#e5e7eb" />{" "}
                {/* Right side gray */}
              </linearGradient>
            </defs>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          // Empty Star: Render an empty gray star if `stars` is less than `halfStar`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </span>
    );
  });

  return <div className="flex -ml-1">{tempStars}</div>; // Render all the stars inside a flex container
};

export default Stars;
