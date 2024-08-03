import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../Images/Search.png";
import { FiChevronDown } from "react-icons/fi";
import { fetchCategories } from "../../api";
import axios from "axios";
import Products from "../Productslist/Products";
import { useTranslation } from "react-i18next";

const Filters = ({ onSubcategorySelect }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [translatedText, setTranslatedText] = useState([]);

  const { t } = useTranslation();
  const categoriesRef = useRef(null);

  // Effect to fetch categories on component mount
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  // Effect to add click event listener when categories dropdown is open
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCategoryOpen(false);
      }
    };

    if (isCategoryOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCategoryOpen]);

  const handleSubCategory = async (id, name) => {
    let response = await axios.get(
      `http://152.52.81.252:8080/groceryPortal/api/categories/${id}`
    );

    setSubCategory(response.data.subcategories);
    setSelectedCategory(name);
    setIsCategoryOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsCategoryOpen(true);
  };

  const handleSelectedCategory = () => {
    setSelectedCategory("");
    setSearchTerm("");
    setSubCategory([]);
  };

  let filteredCategories = categories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <nav className="flex items-center justify-start bg-white mb-4 px-3 mt-4 sm:mt-8">
        <div className="flex-1 max-w-xl mx-4 text-center relative flex items-center">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 sm:h-6"
          />
          <input
            type="text"
            placeholder={t("Search Categories")}
            className="ps-10 w-full py-1.5 border rounded-xl border-blue-600 placeholder:text-[14px] sm:placeholder:text-[16px]"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={(e) => (e.target.placeholder = t(""))}
            onBlur={(e) => (e.target.placeholder = t("Search Categories"))}
          />

          <div className="relative ml-4" ref={categoriesRef}>
            <button
              className="px-4 mb-0 py-2 sm:py-2 border border-blue-600 rounded-xl text-[#973931]  font-semibold flex items-center text-[14px] sm:text-[16px]"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              {t("Categories")}
              <FiChevronDown className="ml-1" />
            </button>
            {isCategoryOpen && filteredCategories.length > 0 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                {filteredCategories.map((category, index) => (
                  <div key={index} className="relative">
                    <button
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                      onClick={() =>
                        handleSubCategory(category.id, category.categoryName)
                      }
                    >
                      {category.categoryName}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {selectedCategory && (
          <div className="relative ml-4">
            <button
              className="px-4 py-2 border border-blue-600 rounded-xl text-[#973931] font-semibold flex items-center"
              onClick={handleSelectedCategory}
            >
              {selectedCategory}
            </button>
          </div>
        )}
      </nav>
      {filteredCategories.length === 0 && (
        <p className="font-semibold ps-8 text-red-600">
          {t("Category Not found")}
        </p>
      )}
      {subCategory.length > 0 && selectedCategory ? (
        <div className="flex">
          {subCategory.map((item) => (
            <div key={item.subCategoryName}>
              <Products
                image={item.imagePath}
                subCategory={item.subCategoryName}
                price={item.price}
                description={item.description}
              />
            </div>
          ))}
        </div>
      ) : (
        selectedCategory && (
          <div className="ps-8 font-semibold">
            <span className="text-red-600">{t("No Products found")}</span>
            {/* <span className="mx-1 text-[#973931]">"{selectedCategory}"</span>
            <span className="text-red-600">{t("Category")}</span> */}
          </div>
        )
      )}
    </div>
  );
};

export default Filters;
