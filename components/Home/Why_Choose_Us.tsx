import { FaGem, FaCouch, FaMoneyCheckAlt } from "react-icons/fa"; // or

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-6">Why Choose Us?</h3>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="flex items-start gap-4">
          <FaGem className="text-3xl text-primary mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-1">Tailored Elegance</h4>
            <p>
              Every stitch, every fold is designed to reflect your identity and
              style.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaCouch className="text-3xl text-primary mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-1">Luxury that Lasts</h4>
            <p>
              We don’t follow trends — we create timeless interiors that speak
              volumes.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaMoneyCheckAlt className="text-3xl text-primary mt-1" />
          <div>
            <h4 className="font-bold text-lg mb-1">
              Affordable Transformation
            </h4>
            <p>
              Premium feel, budget-friendly pricing. Style should be accessible,
              not expensive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
