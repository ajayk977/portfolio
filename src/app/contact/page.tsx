// app/contact/page.js

"use client";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to handle form submission status

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", data);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        console.error("Submission error:", data.message);
        // Handle error (e.g., show a message to the user)
      }
    } catch (error) {
      console.error("Network error:", error);
      // Handle network error (e.g., show a message to the user)
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 mt-16">
        <h1 className="text-4xl mb-6 animate-fade-in">Contact Me</h1>
        {isSubmitted && (
          <div className="bg-green-600 p-4 rounded-lg mb-4 text-center">
            Thank you for your message!
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 flex space-x-6">
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl hover:text-blue-500 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-kumar-27b46a261/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-500 transition-all duration-300" />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-blue-500 transition-all duration-300" />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-blue-500 transition-all duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
