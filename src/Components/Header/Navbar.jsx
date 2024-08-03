import React, { useState, useEffect } from "react";
import EktaLogo from "../../Images/Ekta_logo.jpg";
import i18n from "../i18n";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const changeLanguage = async () => {
    const response = await fetch(
      "https://api.mymemory.translated.net/get?q=Hello World My name!&langpair=en|it"
    );
    let data = await response.json();
    console.log(data.responseData.translatedText);
  };

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const handleLoginClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="App">
      <nav className="flex items-center justify-between bg-white mt-3 mb-4 px-24">
        <div className="flex items-center space-x-4">
          <img src={EktaLogo} alt="Logo" className="h-14" />
        </div>
        <div className="flex space-x-7 items-stretch">
          <button
            className="px-3 py-2 rounded-xl font-semibold border-[#404A85] border-2 text-[#973931]"
            onClick={() =>
              handleLoginClick("http://152.52.81.252:8080/groceryAdmin/login")
            }
          >
            Admin Login
          </button>
          {/* <button
            className="px-3 py-2 rounded-xl font-semibold border-[#404A85] border-2 text-[#973931]"
            onClick={() => handleLoginClick("http://portal.ektaenterpriseshyderabad.co.in:8080/groceryAdmin/login")}
          >
            Domain Login
          </button> */}
          <button
            className="px-3 py-2 rounded-xl font-semibold border-[#404A85] border-2 text-[#973931]"
            onClick={() => chooseLanguage("hi")}
          >
            Hindi
          </button>
          <button
            className="px-3 py-2 rounded-xl font-semibold border-[#404A85] border-2 text-[#973931]"
            onClick={() => chooseLanguage("en")}
          >
            English
          </button>
          <button
            className="px-3 py-2 rounded-xl font-semibold border-[#404A85] border-2 text-[#973931]"
            onClick={() => chooseLanguage("tel")}
          >
            Telugu
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
