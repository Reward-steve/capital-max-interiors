import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+2349121865839"
      target="_blank"
      title=" Chat on WhatsApp"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-4 rounded-full fixed bottom-2 z-20 right-2 bg-green-500 text-white hover:bg-green-600 transition duration-200"
    >
      <FaWhatsapp size={20} />
    </a>
  );
};

export default WhatsAppButton;
