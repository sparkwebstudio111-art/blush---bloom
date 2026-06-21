import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  Send,
} from "lucide-react";

import contatimg from "../images/background.png"

import contactBg from "../images/mblBackground.jpeg"; // <-- Your fixed background image

function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const [errors, setErrors] = useState({});

const whatsappNumber = "8668108891"; // Your WhatsApp Number

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};

const validate = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full Name is required.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone Number is required.";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone Number must contain 10 digits.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  const whatsappMessage = `*New Contact Form Submission*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

📝 Message:
${formData.message}`;

 const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

  window.open(url, "_blank");

  setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  setErrors({});
};
  return (
    <div className="relative min-h-screen overflow-hidden  text-white">
      {/* Fixed Background */}
     {/* Desktop Background */}
<div
  className="fixed inset-0 -z-20 hidden sm:block bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${contatimg})`,
  }}
/>

{/* Mobile Background */}
<div
  className="fixed inset-0 -z-20 block sm:hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${contactBg})`,
  }}
/>

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/15 via-black/80 to-black/40 " />

      {/* Decorative Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-[150px]" />

      <section className="mx-auto max-w-7xl px-0 sm:px-25 py-24 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-yellow-400">
            Contact Us
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">
            We'd Love To
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
            Whether you're booking an appointment, asking a question, or
            planning your bridal makeover, our team is always ready to assist
            you.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          >
            <h2 className="mb-8 text-3xl font-bold text-yellow-400">
              Send a Message
            </h2>

         <form onSubmit={handleSubmit} className="space-y-6">
  {/* Name */}
  <div>
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
    />

    {errors.name && (
      <p className="mt-2 text-sm text-red-400">{errors.name}</p>
    )}
  </div>

  {/* Email */}
  <div>
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
    />

    {errors.email && (
      <p className="mt-2 text-sm text-red-400">{errors.email}</p>
    )}
  </div>

  {/* Phone */}
  <div>
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
      maxLength={10}
      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
    />

    {errors.phone && (
      <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
    )}
  </div>

  {/* Message */}
  <div>
    <textarea
      rows="6"
      name="message"
      placeholder="Write your message..."
      value={formData.message}
      onChange={handleChange}
      className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-500"
    />

    {errors.message && (
      <p className="mt-2 text-sm text-red-400">{errors.message}</p>
    )}
  </div>

  {/* Submit */}
  <motion.button
    type="submit"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.96 }}
    className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-4 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]"
  >
    <Send size={18} />
    Send Message
  </motion.button>
</form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex flex-col justify-center gap-4 sm:gap-5 lg:gap-6"
>
  {[
    {
      icon: <Phone className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Call Us",
      value: "+91 8668108891",
    },
    {
      icon: <Mail className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Email",
      value: "contact@yoursalon.com",
    },
    {
      icon: <MapPin className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Location",
      value: "Your City, Tamil Nadu",
    },
    {
      icon: <Clock3 className="h-6 w-6 sm:h-7 sm:w-7" />,
      title: "Working Hours",
      value: "Mon - Sun : 9:00 AM - 8:00 PM",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{
        y: -4,
        scale: 1.01,
        borderColor: "#facc15",
      }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 sm:gap-5 sm:p-5 lg:rounded-3xl lg:p-6"
    >
      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-500/15 text-yellow-400 sm:h-16 sm:w-16 sm:rounded-2xl">
        {item.icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {item.title}
        </h3>

        <p className="mt-1 break-words text-sm leading-6 text-gray-300 sm:mt-2 sm:text-base">
          {item.value}
        </p>
      </div>
    </motion.div>
  ))}

  {/* Action Buttons */}
  <div className="mt-2 flex flex-col gap-4 pt-4 sm:pt-6 md:flex-row">
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      href="tel:+918668108891"
      className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-5 py-4 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-yellow-500/30 sm:text-base md:flex-1"
    >
      <Phone className="h-5 w-5" />
      Call Now
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      href="https://wa.me/918668108891"
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-yellow-500 bg-yellow-500/10 px-5 py-4 text-sm font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-500/20 md:flex-1 sm:text-base"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </motion.a>
  </div>
</motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-24 rounded-[35px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 p-10 text-center backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-yellow-400">
            Beauty Begins With Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            Book your appointment today and experience premium beauty services
            delivered with elegance, luxury, and personalized care.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default ContactPage;