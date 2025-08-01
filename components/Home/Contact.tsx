"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmition = async () => {
    setStatus("loading");
    setError("");

    const toastId = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data?.error || "Failed to send message.");
        toast.update(toastId, {
          render: data?.error || "Failed to send message.",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      toast.update(toastId, {
        render: "Message sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
      toast.update(toastId, {
        render: "Something went wrong. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="bg-neutral-gray py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
          Let’s Design the Space of Your Dreams
        </h3>
        <p className="text-neutral-700 mb-10">
          Whether you're revamping your home, styling your office, or upgrading
          your lounge — we turn every corner into a masterpiece.
        </p>

        <form
          className="grid gap-6 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>

          <div className="flex justify-center items-center">
            <Button
              type="submit"
              onClick={handleFormSubmition}
              disabled={status === "loading"}
              variant="secondary"
              className="bg-accent-gold text-background-light w-full md:w-1/2 flex items-center justify-center"
            >
              {status === "loading" ? (
                <ImSpinner9 className="animate-spin" />
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,60 350,0 500,60 L500,00 L0,0 Z"
            className="fill-primary"
          />
        </svg>
      </div>
    </section>
  );
}
