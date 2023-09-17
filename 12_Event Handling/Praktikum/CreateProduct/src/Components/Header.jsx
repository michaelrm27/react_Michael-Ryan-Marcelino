import React, { useState } from "react";
import article from "./Article";

export default function Header() {
  const [currentLangae, setCurrentLanguage] = useState("en")

  const langText = {
    en: {
      title: article.title.en,
      description: article.description.en,
      buttonText:"Switch to Bahasa Indonesia"
    },
    id: {
      title: article.title.id,
      description: article.description.id,
      buttonText: "Switch to English"
    }

  }

  function handleToggle() {
    // Tidak perlu parameter currentLangae di sini
    const newLanguage = currentLangae === 'en' ? 'id' : 'en';
    setCurrentLanguage(newLanguage); // Perbarui currentLangae dengan newLanguage
  }


  return (
    <>
    <div className="container p-lg-5">
      <div className="text-center">
        <img src="image/bootstrap-logo.svg.png" alt="logo" />
      </div>
      <div className="text-center mt-lg-3">
        <p className="text-secondary-emphasis fs-4 fw-bold">
          {langText[currentLangae].title}
        </p>
        <p className="text-secondary-emphasis fs-4">
          {langText[currentLangae].description}
        </p>
        <button onClick={handleToggle}>
          {langText[currentLangae].buttonText}
        </button>
      </div>
    </div>
    </>
  );
}
