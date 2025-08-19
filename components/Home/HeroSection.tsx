import { Button } from "../ui/Button";
import img from "@/public/capital-max.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-100 bg-fixed bg-cover bg-center bg-no-repeat text-black py-32 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${img.src})`,
      }}
    >
      {/* Foreground content */}
      <div className="relative z-10 bg-white/80 dark:bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-3xl max-w-3xl mx-auto text-center shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
          Masters of Curtain Couture & Bold Interiors
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Tired of ordinary? Step into a world of breathtaking beauty and bold
          transformation with{" "}
          <span className="font-semibold">Capital Max Interiors</span> — the
          masters of curtain couture.
        </p>
        <div className="mt-8">
          <Button variant="ghost">
            <a href="#services">Explore Collection</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
