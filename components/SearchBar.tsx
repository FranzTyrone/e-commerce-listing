import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';
import { RootState } from '../store/store';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.product.searchTerm);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      className="p-2 border border-gray-300 rounded w-64"
    />
  );
};

export default SearchBar;