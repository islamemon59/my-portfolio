/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // ✅ SweetAlert2
import emailjs from "@emailjs/browser"; // ✅ EmailJS
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut", duration: 1.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
};

export default function Contact() {
  document.title = "Contact";

  const form = useRef(); // ✅ create ref to form

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      // ✅ send email using EmailJS
      emailjs
        .sendForm(
          "service_1mpj1hm",
          "template_xtcayv8",
          form.current,
          "CeOVQ2REDZ6Rnszl6"
        )
        .then(
          (result) => {
            Swal.fire({
              icon: "success",
              title: "Message Sent!",
              text: `Thank you, ${formData.name}. I’ll get back to you soon.`,
              confirmButtonColor: "#E63946",
            });
            setFormData({ name: "", email: "", message: "" }); // reset form
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops!",
              text: "Something went wrong. Please try again later.",
              confirmButtonColor: "#E63946",
            });
            console.error(error.text);
          }
        );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please fill out all fields before submitting.",
        confirmButtonColor: "#E63946",
      });
    }
  };

  const contactData = [
    {
      title: "Email",
      value: "islamemon59@gmail.com",
      link: "mailto:islamemon59@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      title: "Phone",
      value: "+8601872312970",
      link: "tel:+8601872312970",
      icon: <FaPhoneAlt />,
    },
    {
      title: "WhatsApp",
      value: "+8601920228756",
      link: "https://wa.me/8601920228756",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <section
      id="contact"
      className="px-4 py-20 md:py-16 md:px-16 bg-transparent text-black overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-extrabold text-[#E63946]"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
        >
          {contactData.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl shadow-md
                         transition-transform duration-300 transform-gpu will-change-transform
                         hover:scale-105 hover:shadow-xl overflow-hidden"
              variants={itemVariants}
            >
              <div className="text-3xl text-[#E63946] mb-3">{contact.icon}</div>
              <h3 className="text-xl font-semibold text-[#E63946]">
                {contact.title}
              </h3>
              <p className="text-base-content/80 mt-1">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* ✅ Contact form connected to EmailJS */}
        <motion.form
          ref={form} // ✅ attach ref
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 text-left max-w-md mx-auto p-6 rounded-xl shadow"
          variants={itemVariants}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-1 bg-white placeholder:text-gray-500 border-black rounded px-4 py-3 focus:outline-none focus:border-[#E63946] transition focus:ring-2 focus:ring-[#E63946]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-1 bg-white placeholder:text-gray-500 border-black rounded px-4 py-3 focus:outline-none focus:border-[#E63946] transition focus:ring-2 focus:ring-[#E63946]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-1 bg-white placeholder:text-gray-500 border-black rounded px-4 py-3 focus:outline-none focus:border-[#E63946] transition focus:ring-2 focus:ring-[#E63946]"
          />
          <button
            type="submit"
            className="bg-[#E63946] text-white px-6 py-3 rounded hover:bg-black transition font-semibold"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
