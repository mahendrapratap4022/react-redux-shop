import { Action } from '../constants';

export const setProducts = (products) => {
  return {
    type: Action.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: Action.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: Action.REMOVE_SELECTED_PRODUCT,
  };
};
