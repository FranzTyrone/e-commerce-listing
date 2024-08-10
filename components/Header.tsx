import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Header = () => {
  const cart = useSelector((state: RootState) => state.product.cart);
  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const totalPrice = useSelector((state: RootState) => 
    Object.entries(cart).reduce((sum, [id, count]) => {
      const product = state.product.products.find(p => p.id === parseInt(id));
      return sum + (product ? product.price * count : 0);
    }, 0)
  );

  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-commerce Store</h1>
        <div>
          <span className="mr-4">Items in cart: {totalItems}</span>
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;