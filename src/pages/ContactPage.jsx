import React, { useState } from 'react'
import { contactPageStyles } from "../assets/style"
import { Clock, IndianRupee, Mail, Phone, Send, ShoppingCart, User, AlertCircle  } from "lucide-react"
import Navbar from '../components/Navbar';

function InputWithIcon({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
}) {
  return (
    <label className="block">
      <span className={contactPageStyles.inputLabel}>
        {label}{" "}
        {required && <span className={contactPageStyles.requiredStar}>*</span>}
      </span>
      <div className={contactPageStyles.inputContainer}>
        <div className={contactPageStyles.inputIconContainer}>{icon}</div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${contactPageStyles.inputBase} ${error ? contactPageStyles.inputError : contactPageStyles.inputNormal
            }`}
        />
      </div>
      {error && (
        <p className={contactPageStyles.errorMessage}>
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </label>
  );
}

// Select with icon
function SelectWithIcon({
  icon,
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  required,
}) {
  return (
    <label className="block">
      <span className={contactPageStyles.inputLabel}>
        {label}{" "}
        {required && <span className={contactPageStyles.requiredStar}>*</span>}
      </span>
      <div className={contactPageStyles.inputContainer}>
        <div className={contactPageStyles.inputIconContainer}>{icon}</div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${contactPageStyles.inputBase} ${error ? contactPageStyles.inputError : contactPageStyles.inputNormal
            }`}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}

// Creative card used on right side
function CreativeCard({
  title,
  subtitle,
  icon,
  ctaText,
  ctaOnClick,
  accent = "amber",
}) {
  // accent controls small color variants
  const accentBg =
    accent === "indigo"
      ? contactPageStyles.accentIndigo
      : contactPageStyles.accentAmber;
  const buttonClass =
    accent === "indigo"
      ? contactPageStyles.buttonIndigo
      : contactPageStyles.buttonAmber;

  return (
    <div className={`${contactPageStyles.creativeCardBase} ${accentBg}`}>
      <div className="flex items-start gap-4">
        <div className={contactPageStyles.creativeCardIconContainer}>
          {icon}
        </div>
        <div className="flex-1">
          <div
            className={contactPageStyles.creativeCardTitle}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </div>
          <p className={contactPageStyles.creativeCardSubtitle}>{subtitle}</p>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={ctaOnClick}
          className={`${contactPageStyles.creativeCardButtonBase} ${buttonClass}`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}


function ContactPage() {

  const WHATSAPP_NUMBER = "89789097894";

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    product: "General Inquiry",
    budget: "",
    contactMethod: "WhatsApp",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const products = [
    "General Inquiry",
    " Custome Aari Work Desing",
    " Blouse Stitching",
    "price Details",
    "Facing error",

  ];

  // show toast
  function showToast(text, kind = "info", duration = 1800) {
    setToast({ text, kind });
    setTimeout(() => setToast(null), duration);
  }

  // strict validation: all fields required
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email is invalid";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.product.trim()) e.product = "Select product";
    if (!form.budget.trim()) e.budget = "Budget is required";
    if (!form.contactMethod.trim()) e.contactMethod = "Select contact method";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      showToast("Please fill all required fields", "error");
      return;
    }

    setSending(true);

    // Build WhatsApp message (formatted)
    const message =
      `Hello! I am *${form.name}*.\n\n` +
      `*Interest:* ${form.product}\n` +
      `*Budget:* ${form.budget}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Preferred Contact:* ${form.contactMethod}\n\n` +
      `*Message:* ${form.message}`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`;

    showToast("Opening WhatsApp...", "success", 900);

    setTimeout(() => {
      window.open(url, "_blank");
      clearForm();
      setSending(false);
      showToast("Submitted — form cleared", "success", 1600);
    }, 700);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({
      ...s,
      [name]: value,
    }));
    setErrors((s) => ({
      ...s,
      [name]: undefined,
    }))
  }

  //to clear

  function clearForm() {
    setForm(initialForm);
    setErrors({});
  }

  return (
    <div>
      <Navbar />

<div className='min-h-screen bg-red-700 flex justify-center'>
      <div className={contactPageStyles.pageContainer}>
        <div className={contactPageStyles.innerContainer}>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg  py-10 relative overflow-hidden">
            <h1 className="md:text-3xl text-2xl font-semibold  text-center mb-2">
              Contact us
            </h1>
            <p className='text-center text-sm text-yellow-700  mb-6' >We will reach you with in 12 hours</p>


            <div className={contactPageStyles.mainGrid}>
              <div className={contactPageStyles.leftColumn}>
                <div className={contactPageStyles.formCard}>
                  <form onSubmit={handleSubmit} className={contactPageStyles.form} >
                    <div className={contactPageStyles.inputGrid} >
                      <InputWithIcon icon={<User />} label={"Your Name"} name="name" value={form.name} onChange={handleChange} placeholder="Full Name" error={errors.name}
                        required
                      />
                      <InputWithIcon icon={<Mail />} label="Email Address" name="email" value={form.email} onChange={handleChange} placeholder="your@gmail.com" error={errors.email}
                        required
                      />
                    </div>

                    <div className={contactPageStyles.inputGrid}>
                      <InputWithIcon icon={<Phone />} label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="91+" error={errors.phone}
                        required
                      />

                      <SelectWithIcon icon={<Clock className="w-5  h-5 text-black" />}
                        label="Preffered Contact" name="contactMethod" value={form.contactMethod} onChange={handleChange} options={["Whatsapp", "Phonecall", "Email"]} error={errors.contactMethod} required
                      />
                    </div>

                    <div>
                      <SelectWithIcon icon={<ShoppingCart className="w-5  h-5 text-black" />}
                                            label="Product of interest " name="product" value={form.product} onChange={handleChange} options={products} error={errors.product} required
                                        />
                    </div>


                    <div className={contactPageStyles.inputGrid}>

                      <InputWithIcon icon={<IndianRupee />} className="w-5 h-5 text-green-600" label="Estimated budget" name="budget" value={form.budget} onChange={handleChange} placeholder="e.g ₹ 2,500" error={errors.budget}
                        required
                      />

                      <div >
                        <label className={contactPageStyles.inputLabel}>
                          Your Message{" "}
                          <span className={contactPageStyles.requiredStar}> *</span>
                        </label>
                        <textarea name='message' value={form.message} onChange={handleChange} rows={4} className={`${contactPageStyles.textareaContainer} ${errors.message ? contactPageStyles.inputError : contactPageStyles.inputNormal}`}
                          placeholder='Enter your message' required >
                        </textarea>
                      </div>

                    </div>

                     <div className={contactPageStyles.buttonsContainer}>
                                        <button type='submit' disabled={sending} className={contactPageStyles.submitButton} >
                                            <Send className="w-4 h-4" />
                                            <span className='font-medium '>Send via WhatsApp</span>
                                        </button>
                                        <button type='button' onClick={() => {
                                            clearForm();
                                            showToast("Form Cleared", "info");

                                        }} className={contactPageStyles.clearButton}>
                                            clear
                                        </button>
                                    </div>


                  </form>

                </div>

              </div>

            <div className={contactPageStyles.rightColumn}>

     <div className="py-10 px-4 text-center">

      <h2 className="text-2xl md:text-3xl font-bold mb-6 [font-family:'Playfair_Display']">
        Visit Our Store
      </h2>

      <p className="mb-6 text-gray-600 [font-family:'Poppins']">
        We are located in Newark. Come visit us!
      </p>

      {/* Google Map */}
      <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <div className="w-full rounded-xl overflow-hidden shadow-lg">
  <iframe
    className="w-full h-[400px]"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.70532602348!2d-74.26447498949847!3d40.73128820161317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sin!4v1780121038563!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Store Location"
  />
</div>
       
      </div>

    </div>

            </div>


            </div>


          


          </div>

        </div>


      </div>

    </div>

    </div>
  )
}

export default ContactPage