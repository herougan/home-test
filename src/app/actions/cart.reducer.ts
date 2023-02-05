import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart, clearCart } from "./cart.actions";

export const initialState = 0;

export const cartReducer = createReducer(
	initialState,
	on(addToCart, (state) => state + 1),
	on(removeFromCart, (state) => state - 1),
	on(clearCart, (state) => 0),
);