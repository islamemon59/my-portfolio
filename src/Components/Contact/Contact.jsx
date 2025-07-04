/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 1.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
};

export default function Contact() {
  document.title = "Contact";


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
                           hover:scale-105 hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="text-3xl text-[#E63946] mb-3">{contact.icon}</div>
                <h3 className="text-xl font-semibold text-[#E63946]">
                  {contact.title}
                </h3>
                <p className="text-gray-600 mt-1">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Contact form */}
          <motion.form
            className="mt-12 space-y-6 text-left max-w-md mx-auto p-6 rounded-xl shadow"
            variants={itemVariants}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full border-1 border-black rounded px-4 py-3 focus:outline-none focus:border-[#E63946] transition focus:ring-2 focus:ring-[#E63946]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-1 border-black rounded px-4 py-3 focus:outline-none focus:border-[#E63946] transition focus:ring-2 focus:ring-[#E63946]"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border-1 border-black rounded px-4 py-3 focus:outline-none focus:border-[#E63946] transition focus:ring-2 focus:ring-[#E63946]"
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
