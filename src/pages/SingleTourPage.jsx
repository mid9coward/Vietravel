import React from "react";
import { Accordion, TourGallery, SingleReview, Stars } from "../components";
import { tours } from "../data";
import { useParams } from "react-router-dom";

const SingleTourPage = () => {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Find the tour that matches the 'id' from the URL
  const singleTour = tours.find((tour) => {
    return tour.name === id;
  });

  return (
    <section className="section pt-20 bg-gray-50">
      <div className="section-center">
        {/* Tour gallery section displaying images */}
        <TourGallery images={singleTour.images} />

        {/* Tour overview section */}
        <div className="py-12 px-4">
          <p className="text-2xl sm:text-4xl text-gray-700 italic font-bold">
            {singleTour.name} {singleTour.duration} Tour
          </p>
          <blockquote className="ml-2 quote max-w-65ch">
            {singleTour.description}
          </blockquote>
        </div>

        {/* Tour details section with collapsible accordions */}
        <div>
          <Accordion
            title="Itinerary"
            info={singleTour.itinerary}
            active={true} // Set itinerary as default open
          />
          <Accordion
            title="Included"
            info={singleTour.included}
            active={false} // Initially collapsed
          />
          <Accordion title="Excluded" info={singleTour.excluded} />
          <Accordion
            title="Cancellation policy"
            info={singleTour.cancellationPolicy}
            active={false} // Initially collapsed
          />
          <Accordion
            title="Confirmation policy"
            info={singleTour.confirmationPolicy}
            active={false} // Initially collapsed
          />
          <Accordion
            title="Additional information"
            info={singleTour.additionalInfo}
            active={false} // Initially collapsed
          />
        </div>

        {/* Customer reviews section */}
        <div className="max-w-screen-xl py-10 mx-auto">
          {/* Reviews header */}
          <h2 className="text-xl font-bold sm:text-2xl">Customer Reviews</h2>
          <div className="flex items-center mt-4">
            {/* Display average rating */}
            <p className="text-3xl font-medium">
              {singleTour.averageRating}
              <span className="sr-only"> Average review score </span>
            </p>

            <div className="ml-4">
              {/* Star rating component */}
              <Stars stars={singleTour.averageRating} />

              {/* Display number of reviews */}
              <p className="mt-0.5 text-xs text-gray-500">
                Based on {singleTour.numReviews}{" "}
                {singleTour.numReviews > 1 ? "reviews" : "review"}
              </p>
            </div>
          </div>

          {/* Display all customer reviews */}
          <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12">
            {singleTour.reviews?.map((review) => {
              return <SingleReview key={review._id} review={review} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleTourPage;
