import { Button } from "../ui/Button";
import img from "@/public/capital-max.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-gray-100 bg-fixed bg-cover bg-center text-black py-28 px-6 text-center"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="relative z-10 bg-white/70 backdrop-blur-sm p-6 rounded-xl max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Masters of Curtain Couture & Bold Interiors
        </h2>
        <p className="text-lg">
          Tired of ordinary? Step into a world of breathtaking beauty and bold
          transformation with Capital Max Interiors — the masters of curtain
          couture.
        </p>
        <div className="mt-8">
          <Button variant="ghost">Explore Collection</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
