import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { itemCount } = useCart();

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  return (
    <div
      className="absolute top-14 lg:top-15 right-[-50px] lg:right-[-70px] w-[360px] h-64 bg-white shadow-[0_20px_50px_-20px_rgba(29,32,38,0.5)] rounded-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col p-5 gap-6 h-full">
        <h2 className="text-base font-bold">Cart</h2>
        <div className="bg-[#E4E9F2] h-[1px] w-[360px] self-center"></div>
        <ul
          className={`flex flex-col justify-center gap-3 ${
            itemCount > 0 ? "" : "h-full"
          }`}
        >
          {itemCount > 0 ? (
            <CartItem />
          ) : (
            <p className="text-base font-bold text-[#69707D] self-center">
              Your cart is empty
            </p>
          )}
        </ul>
        {itemCount > 0 && (
          <button className="bg-primary-orange text-base text-white font-bold h-14 rounded-xl">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
