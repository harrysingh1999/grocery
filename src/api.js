import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "http://152.52.81.252:8080/groceryPortal/api/categories/online"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchSubcategories = async (categoryId) => {
  try {
    const response = await axios.get(
      `http://localhost:8081/api/subcategories/online?categoryId=${categoryId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return [];
  }
};

// export const fetchProductsBySubcategory = async (subcategoryId) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:8081/api/products?subcategoryId=${subcategoryId}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/api/v1/enquiry",
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
