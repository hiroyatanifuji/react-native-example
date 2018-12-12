import { createStore, combineReducers } from "redux";
import cartItems from "../reducers/cartItems";

const RootReducers = combineReducers({
  cartItems,
});

export default store = createStore(RootReducers);