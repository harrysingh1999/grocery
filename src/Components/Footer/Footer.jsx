import React, { useRef, useState } from "react";
import { HiMail } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import EktaLogo from "../../Images/Ekta_logo.jpg";
import { submitContactForm } from "../../api";
import { useTranslation } from "react-i18next";
import { FaAddressBook } from "react-icons/fa";


export default function Footer() {
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.149001008676!2d77.37584617457253!3d28.625296084410955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff3260c6761%3A0x2ecd01b8bfe74df2!2sBSI%20Business%20Park%20H161%20Sector%2063%20Noida!5e0!3m2!1sen!2sin!4v1719979560906!5m2!1sen!2sin";

  let nameRef = useRef(null);
  let phoneRef = useRef(null);
  let emailRef = useRef(null);
  let remarksRef = useRef(null);
  const [notify, setNotify] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!nameRef.current.value.trim() || !phoneRef.current.value.trim()) {
      alert("Name and Phone No. are required fields.");
      return;
    }

    // Phone number validation (numeric only)
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phoneRef.current.value)) {
      alert("Phone No. should contain only numbers.");
      return;
    }

    const formData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      remarks: remarksRef.current.value,
    };

    try {
      const response = await submitContactForm(formData);
      console.log("Form submitted successfully:", response);
      // Reset form and notify
      setNotifyMessage("Form submitted successfully.");
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
      }, 3000);
      e.target.reset();
    } catch (error) {
      alert("Error submitting the form. Please try again.");
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <>
      <div className="grid gap-6 mx-4 lg:p-2 grid-cols-12 place-items-center my-8 lg:mx-10">
        {/* Column 1: Address and Contact */}
        <div className="col-span-12 lg:col-span-4 flex justify-end items-center flex-col w-full max-w-[350px] h-full">
          {/* <div className=""> */}
          <div className="border border-gray-200 rounded-lg shadow-lg h-full w-full flex justify-center flex-col items-center py-12 lg:py-0 p-4">
            <img src={EktaLogo} alt="Logo" className="h-16 w-30 md:w-40 mb-5" />
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="p-0 text-2xl md:text-[28px] font-bold text-blue-800 text-center mt-6">
                {t("Contact Sales")}
              </p>
              <div className="flex justify-start items-center">
                <div className="h-[24px] w-[24px] rounded-lg grid place-items-center bg-black me-3">
                  <FaPhoneSquareAlt className="text-white" />
                </div>
                <div className="p-0 flex ">
                  <p className="text-1.5 sm:text-[16px] font-semibold text-red-600 w-24">{t("Phone")}</p>
                  <p className="text-1xl sm:text-[16px] text-black ml-2">XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-[24px] w-[24px] rounded-lg grid place-items-center bg-black me-3">
                  <HiMail className="text-white" />
                </div>
                <div className="p-0 flex">
                  <p className="text-1.5 sm:text-[16px] font-semibold text-red-600 w-24">{t("Email")}</p>
                  <p className="text-1xl sm:text-[16px] text-black ml-2">XXXXX 35252</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-[24px] w-[24px] rounded-lg grid place-items-center bg-black me-3">
                  <FaAddressBook className="text-white" />
                </div>
                <div className="p-0 flex">
                  <p className="text-1.5 sm:text-[16px] font-semibold text-red-600 w-24">{t("Address")}</p>
                  <p className="text-1xl sm:text-[16px] text-black ml-2">XXXXX XXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Contact Form */}
        <div className="col-span-12 lg:col-span-4 flex justify-center items-center rounded-lg shadow-lg border border-gray-200 py-6 px-8 w-full max-w-[350px]">
          <form onSubmit={handleSubmit} className="w-full">
              <h2 className="text-3xl font-bold text-red-800 mb-4 ml-1 text-start"> {t("Contact Form")} </h2>
              <div className="grid grid-cols-1 gap-3">
                {notify && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <span className="block sm:inline">{t(notifyMessage)}</span>
                  </div>
                )}
                <input
                  required
                  type="text"
                  placeholder={t("Full Name")}
                  ref={nameRef}
                  pattern="[A-Za-z ]+"
                  title="Please enter only letters and spaces"
                  className="bg-white border border-gray-400 rounded-lg outline-none px-3 py-2 w-full shadow-sm"
                />
                <input
                  required
                  type="tel"
                  placeholder={t("Phone No")}
                  ref={phoneRef}
                  pattern="[0-9]+"
                  title="Please enter only numbers"
                  className="bg-white border border-gray-400 rounded-lg outline-none px-3 py-2 w-full shadow-sm"
                />
                <input
                  type="email"
                  placeholder={t("Email Id")}
                  ref={emailRef}
                  className="bg-white border border-gray-400 rounded-lg outline-none px-3 py-2 w-full shadow-sm"
                />
                <textarea
                  placeholder={t("Remarks (optional)")}
                  rows={2}
                  ref={remarksRef}
                  className="bg-white border border-gray-400 rounded-lg outline-none px-3 py-3 w-full shadow-sm resize-none"
                ></textarea>
                <button className="bg-gradient-to-r from-blue-600 hover:from-blue-500 hover:to-[#302872] to-[#3200cb] uppercase rounded-lg text-white text-[14px] font-bold py-3 px-4 w-full">
                  {t("Submit")}
                </button>
              </div>
          </form>
        </div>

        {/* Column 3: Google Map */}
        <div className="col-span-12 lg:col-span-4 flex justify-center items-center w-full max-w-[350px] shadow-lg">
          <a
            href={googleMapsEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="396"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border-2 border-gray-200"
            ></iframe>
          </a>
        </div>
      </div>
      <div className="bg-[#3d3ac7e8] py-4 sm:py-6 pb-6 sm:pb-8">
        <p className="text-center text-white font-semibold text-xs md:text-base px-6">
          {t(
            "Copyright © 2024 Ekta Enterprises | Made with ❤ by Fairwood Tech"
          )}
        </p>
      </div>
    </>
  );
}
