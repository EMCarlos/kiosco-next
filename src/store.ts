import { Product } from "@prisma/client";
import { create } from "zustand";
import { OrderItem } from "./types";

interface Store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
  increaseQuantity: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  removeItem: (id: Product["id"]) => void;
  clearOrder: () => void;
}

export const useStore = create<Store>((set) => ({
  order: [],

  addToOrder: (product) => {
    set((state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { image, categoryId, ...data } = product;

      const item = state.order.find((item) => item.id === product.id);

      if (item) {
        item.quantity += 1;
        item.subtotal = item.quantity * item.price;
        return { order: [...state.order] };
      }

      return {
        order: [
          ...state.order,
          {
            ...data,
            quantity: 1,
            subtotal: 1 * product.price,
          },
        ],
      };
    });
  },

  increaseQuantity: (id) => {
    set((state) => {
      const item = state.order.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
        item.subtotal = item.quantity * item.price;
        return { order: [...state.order] };
      }

      return { order: [...state.order] };
    });
  },

  decreaseQuantity: (id) => {
    set((state) => {
      const item = state.order.find((item) => item.id === id);

      if (item) {
        item.quantity -= 1;
        item.subtotal = item.quantity * item.price;
        return { order: [...state.order] };
      }

      return { order: [...state.order] };
    });
  },

  removeItem: (id) => {
    set((state) => {
      const updatedOrders = state.order.filter((item) => item.id !== id);

      return { order: updatedOrders };
    });
  },

  clearOrder: () => {
    set({ order: [] });
  },
}));
