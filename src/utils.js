const allProductsUrl =
  'https://course-api.netlify.app/api/javascript-store-products';
// temporary single product
// 'https://course-api.netlify.app/api/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.netlify.app/api/javascript-store-single-product';

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = () => {};

const getStorageItem = () => {};
const setStorageItem = () => {};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
