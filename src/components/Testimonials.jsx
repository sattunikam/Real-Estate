import React from "react";
import assets, { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <>
      <div
        id="Testimonials"
        className="flex overflow-hidden flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Customer{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Testimonials
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-12">
          Real Stories from Those Who Found Home with Us
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((testimonials, index) => (
            <div
              key={index}
              className="max-w-[340px] border [border-color:#e5e7eb] hover:border-amber-500 shadow-lg rounded px-8 py-12 text-center"
            >
              <img
                className="w-20 h-20 rounded-full mx-auto mb-4"
                src={testimonials.image}
                alt={testimonials.alt}
              />
              <h2 className="text-xl text-gray-700 font-medium">{testimonials.name}</h2>
              <p className="text-gray-500 mb-4 text-sm">{testimonials.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: testimonials.rating }, (items, index) => (
                  <img key={index} src={assets.star_icon} />
                ))}
              </div>
              <p className="text-gray-600">{testimonials.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
