import { Action } from '../constants';

const init = {
  products: [],
};
export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case Action.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Action.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case Action.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
