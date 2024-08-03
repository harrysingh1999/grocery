import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Products = ({
  selectedSubcategoryId,
  subCategory,
  price,
  description,
  image,
}) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (selectedSubcategoryId) {
  //     const getProducts = async () => {
  //       try {
  //         const data = await fetchProductsBySubcategory(selectedSubcategoryId);
  //         setProducts(data);
  //       } catch (error) {
  //         console.error("Error fetching products:", error);
  //       }
  //     };

  //     getProducts();
  //   }
  // }, [selectedSubcategoryId]);

  // if (products.length === 0) {
  //   return <div className='ml-8 font-semibold'>No products available</div>;
  // }

  const handleClick = (name, price, description) => {
    const message = `Product: ${name}\nPrice: ${price}\nDescription: ${description}`;
    const whatsappUrl = `https://wa.me/9717448334?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // const emailSubject = encodeURIComponent("Product Enquiry");
    // const emailBody = encodeURIComponent(message);
    // const emailUrl = `mailto:harvinder.shahu@paytelgroup.com?subject=${emailSubject}&body=${emailBody}`;
    // window.location.href = emailUrl;
  };

  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-7 mt-7 px-7">
      {/* {products.map((product, index) => ( */}
      <div className="border p-2 flex flex-col items-center">
        <div className="w-full h-48">
          <img
            src={image}
            // src="https://m.economictimes.com/thumb/msid-90590123,width-1200,height-900,resizemode-4,imgsize-154184/rice.jpg"
            // alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between w-full mt-2 px-2">
          <h2 className="text-left text-[#404A85]">{subCategory}</h2>
          <p className="text-right text-[#973931] font-semibold">Rs. {price}</p>
        </div>
        <p className="text-center text-gray-600 mt-1">{description}</p>
        <button
          className="mt-3 w-full border-2 border-blue-500 text-[#973931] px-4 py-2 rounded font-semibold transition duration-300 ease-in-out hover:bg-green-500 hover:text-white"
          onClick={() => handleClick(subCategory, price, description)}
        >
          {t("Pay Now")}
        </button>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Products;
