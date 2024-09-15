"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "/Blue rose cake.png",
    "/Blue Brown Abstract Illustration Ice Cream Banner Landscape.png",
    "/Pastel-slider1.png",
    "/Pastel Pink and Brown Modern Sale Food Banner.png",
  ];

  // Change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel w-full relative max-h-min">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            width={1000}
            height={1000}
            src={slide}
            className="w-full h-[500px] max-sm:h-[200px] max-md:h-[300px] max-lg:h-[400px]"
            alt={`slide-${index}`}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            name="button-axe"
            type="button"
            aria-label="Button Name"
            key={index}
            onClick={() => goToSlide(index)}
            className={`btn btn-xs ${
              index === activeSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
