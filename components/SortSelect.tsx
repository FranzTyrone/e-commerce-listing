import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../store/productSlice';
import { RootState } from '../store/store';

const SortSelect = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.product.sortBy);

  return (
    <select
      value={sortBy}
      onChange={(e) => dispatch(setSortBy(e.target.value))}
      className="p-2 border border-gray-300 rounded"
    >
      <option value="">Sort by</option>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default SortSelect;