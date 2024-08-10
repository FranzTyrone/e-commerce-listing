import { useDispatch } from 'react-redux';
import { addToCart } from '../store/productSlice';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">
              {product.description.length > 100
                ? `${product.description.substring(0, 100)}...`
                : product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
              <span className="text-yellow-500">{'★'.repeat(Math.round(product.rating))}</span>
            </div>
            <button
              onClick={() => dispatch(addToCart(product.id))}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;