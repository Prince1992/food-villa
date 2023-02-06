import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearAllItem = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart</h1>
      <button className="p-2 m-2 bg-red-400" onClick={() => clearAllItem()}>
        Clear Item
      </button>
      <div className="flex m-2 p-2 flex-wrap">
        {cartItems.map((items) => (
          <FoodItem key={items.id} {...items}></FoodItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
