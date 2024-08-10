import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../utils/api';
import { setProducts } from '../store/productSlice';
import { RootState } from '../store/store';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import SortSelect from '../components/SortSelect';
import Header from '../components/Header';


interface HomeProps {
  initialProducts: any[];
}

export default function Home({ initialProducts }: HomeProps) {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(setProducts(initialProducts));
  }, [dispatch, initialProducts]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>E-commerce Product Listing</title>
        <meta name="description" content="Browse our amazing products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-8">
          <SearchBar />
          <SortSelect />
        </div>
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts();
  return {
    props: {
      initialProducts: products,
    },
  };
};