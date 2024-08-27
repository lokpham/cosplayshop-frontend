import { atom } from "jotai";
import { card_product } from "../types/product_type";
import { atomWithStorage } from "jotai/utils";

export const list_cart_atom: any = atomWithStorage("carts", []);
export const list_cart_total: any = atomWithStorage("cart_total", 0);

type authentication = {
  user: any;
  isLogged: boolean;
};
export const authentication_atom = atomWithStorage<authentication>(
  "authentication",
  { isLogged: false, user: null }
);

export const authentication_action = {
  login: atom(
    (get) => get(authentication_atom),
    (get, set, payload: any) => {
      set(authentication_atom, { isLogged: true, user: payload });
    }
  ),
  logout: atom(
    (get) => get(authentication_atom),
    (get, set) => {
      set(authentication_atom, { isLogged: false, user: null });
    }
  ),
};

export const cart_atom = {
  addCart: atom(
    (get) => get(list_cart_atom),
    (get, set, cart: any) => {
      let list_cart: any = get(list_cart_atom);
      let mark = false;
      for (var item of list_cart) {
        if (item.id == cart.id) {
          item.quantity = item.quantity + 1;
          mark = true;
          set(list_cart_atom, [...list_cart]);
        }
      }
      if (!mark) {
        list_cart = [...list_cart, { ...cart, quantity: 1 }];
        set(list_cart_atom, list_cart);
      }
    }
  ),
  getAllCart: atom((get) => {
    let list: any = get(list_cart_atom);
    let total = 0;
    for (var item of list) {
      total += item.quantity;
    }
    return {
      total: total,
      list: get(list_cart_atom),
    };
  }),
  deleteCartItem: atom(null, (get, set, id: number) => {
    let list: any = get(list_cart_atom);
    let filteredList = list.filter((item: any) => item.id !== id);
    set(list_cart_atom, [...filteredList]);
  }),
};
