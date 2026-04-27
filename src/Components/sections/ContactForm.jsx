
import { Link } from "react-router-dom";

import { useState } from "react";

function ContactForm() {
  
  const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScPHlfshXbNgPVVf6c51nH5eu1-3jlKu418USNL4-Dpq2c_OQ/viewform";


    const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    whatsapp: "",
    treatment: "",
    message: "",
    consent: false,
  });

  const [showUploadStep, setShowUploadStep] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  // ---------- HANDLE CHANGE ----------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // remove error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ---------- VALIDATION ----------
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (!formData.treatment) newErrors.treatment = "Select treatment";

    if (!formData.email && !formData.whatsapp)
      newErrors.contact = "Provide Email or WhatsApp";

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.consent) newErrors.consent = "You must agree";

    return newErrors;
  };

  // // ---------- SUBMIT ----------
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const validationErrors = validate();

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     // 🔁 Replace with your backend API
  //     await new Promise((res) => setTimeout(res, 1000));

  // setShowUploadStep(true);  // ✅ MOVE HERE


  //     alert("Form submitted successfully!");

  //     setFormData({
  //       fullName: "",
  //       country: "",
  //       email: "",
  //       whatsapp: "",
  //       treatment: "",
  //       message: "",
  //       consent: false,
  //     });
  //   } catch (err) {
  //     alert("Something went wrong");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:5000/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log("SERVER RESPONSE:", data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    setShowUploadStep(true);

    alert("Form submitted successfully ✅");

    setFormData({
      fullName: "",
      country: "",
      email: "",
      whatsapp: "",
      treatment: "",
      message: "",
      consent: false,
    });

  } catch (err) {
    console.error("ERROR:", err);
    alert("Submission failed ❌");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Get Treatment with Us </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* FULL NAME */}
        <div>
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        {/* COUNTRY */}
        <div>
          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            name="email"
            placeholder="Email "
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* WHATSAPP */}
        <div>
          <input
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {errors.contact && (
          <p className="text-red-500 text-sm">{errors.contact}</p>
        )}

        {/* TREATMENT */}
        <div>
          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Treatment</option>
            <option>Dental Implants</option>
            <option>All-on-4</option>
            <option>Smile Makeover</option>
          </select>

          {errors.treatment && (
            <p className="text-red-500 text-sm">{errors.treatment}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

   

<div className="mt-4">
  <label className="flex items-start gap-2 text-sm text-slate-700">
    
    {/* SINGLE checkbox */}
    <input
      type="checkbox"
      name="consent"
      checked={formData.consent}
      onChange={handleChange}
      required
      className="mt-1"
    />

    {/* Text */}
    <span>
      I agree to{" "}
      <Link
        to="/terms"
        target="_blank"
        className="font-medium text-blue-600 underline hover:text-blue-800"
      >
        Terms & Conditions
      </Link>{" "}
      and consent to sharing my medical details for evaluation.
      
      {/* Subtext */}
      <p className="text-xs text-slate-500 mt-1">
        Your information is secure and only shared with certified dental specialists.
      </p>
    </span>
    
  </label>
</div>

        {errors.consent && (
          <p className="text-red-500 text-sm">{errors.consent}</p>
        )}

        {/* SUBMIT */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

        {showUploadStep && (
      <div className="mt-6 p-5 border rounded-xl bg-green-50 animate-fadeIn">
        
        <h3 className="text-lg font-bold text-green-800">
  🎯 One Last Step — Upload Your Reports
</h3>

        <p className="text-sm text-green-700 mt-2">
          To give you a more accurate treatment plan, please upload your
          dental reports, X-rays, or images.
        </p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block bg-green-600 text-white px-5 py-2 rounded"
        >
          Upload Reports
        </a>
      </div>
    )}
    </section>
  );
}


export default ContactForm;
