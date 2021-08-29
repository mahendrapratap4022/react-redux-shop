import { combineReducers } from 'redux';
import { selectedProductsReducer, productReducer } from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
