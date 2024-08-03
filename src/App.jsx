import React, { useState } from "react";
import Bannerone from "./Components/Banner/Bannerone";
import Navbar from "./Components/Header/Navbar";
import Products from "./Components/Productslist/Products";
import Footer from "./Components/Footer/Footer";
import Bannertwo from "./Components/Banner/Bannertwo";
import Filter from "./Components/Categories/Filters";
import Cashback from "./Components/Banner/Cashback";

function App() {
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  const handleSubcategorySelect = (subcategoryId) => {
    setSelectedSubcategoryId(subcategoryId);
  };

  return (
    <>
      <Navbar />
      <Bannerone />
      <Filter onSubcategorySelect={handleSubcategorySelect} />
      {/* <Products selectedSubcategoryId={selectedSubcategoryId} /> */}
      <Bannertwo />
      <Cashback />
      <Footer />
    </>
  );
}

export default App;
