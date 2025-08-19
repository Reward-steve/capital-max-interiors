"use client"; // This component needs to be a Client Component for state management

import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import { FaEye, FaTimes } from "react-icons/fa"; // Add FaTimes for the close button
import { galleryItems } from "@/constant";

// Modal Component for displaying the enlarged image
const ImageModal = ({
  image,
  title,
  description,
  onClose,
}: {
  image: string;
  title: string;
  description: string;
  onClose: () => void;
}) => {
  return (
    <div
      id="service"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 bg-gray-500 rounded-full p-2 hover:animate-spin hover:text-red-500 right-4 text-white z-10"
          aria-label="Close"
        >
          <FaTimes size={24} className="" />
        </button>

        <Image
          src={image}
          alt={title}
          width={800} // Set a max width
          height={600} // Set a max height, will scale with object-fit
          className="w-full h-auto object-contain"
        />

        <div className="p-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const OurWorkGallery = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  return (
    <div className="relative">
      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,60 350,0 500,60 L500,0 L0,0 Z"
            className="fill-primary"
          />
        </svg>
      </div>

      {/* Gallery Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Work</h2>
            <p className="text-gray-500 mt-2">
              A preview of some stunning transformations by Capital Max
              Interior.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-xl transition text-left"
                aria-label={`View image of ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400} // Set a width
                  height={240} // Set a height
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
                  <div className="text-white text-center">
                    <FaEye
                      size={26}
                      className="mx-auto mb-2 animate-pulse"
                      title="View"
                    />
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="text-xs mt-1">{item.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Conditionally render the modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          description={selectedImage.description}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default OurWorkGallery;
