import CapitalMaxLanding from "@/components/Home/CapitalMaxLanding";
// import { ToastContainer } from "react-toastify/unstyled";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <CapitalMaxLanding />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
