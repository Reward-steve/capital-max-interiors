import { FaEye } from "react-icons/fa";
import { galleryItems } from "@/constant";
const OurWorkGallery = () => {
  return (
    <div className="relative">
      {/* Curved SVG bottom */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,60 350,0 500,60 L500,0 L0,0 Z"
            fill="#f3f4f6"
          ></path>
        </svg>
      </div>

      <section id="our-work" className="py-20 px-4 bg-white">
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
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <FaEye size={24} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkGallery;
