import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  cart: { [key: number]: number };
  searchTerm: string;
  sortBy: string;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  cart: {},
  searchTerm: '',
  sortBy: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        if (action.payload === 'price') {
          return a.price - b.price;
        } else if (action.payload === 'rating') {
          return b.rating - a.rating;
        }
        return 0;
      });
    },
    addToCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cart[productId] = (state.cart[productId] || 0) + 1;
    },
  },
});

export const { setProducts, setSearchTerm, setSortBy, addToCart } = productSlice.actions;
export default productSlice.reducer;