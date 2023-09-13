import { useState } from "react";
import { useCart } from "../contexts/CartContext";

function ProductDescription() {
  const [productsNum, setProductsNum] = useState(0);

  const { addItem } = useCart();

  function handleClickNum(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e.target);
    const node = (e.target as Element).closest(".calculate");
    if (node) {
      if (node.classList.contains("minus")) {
        console.log("minus1", productsNum);
        if (productsNum === 0) return;
        console.log("minus", productsNum);

        setProductsNum((num) => --num);
      }
      if (node.classList.contains("plus")) {
        console.log("plus", productsNum);
        setProductsNum((num) => ++num);
      }
    }
  }

  function handleAddCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const node = (e.target as Element).closest("button");
    if (node) {
      addItem(productsNum);
    }
  }

  return (
    <div className="flex flex-col gap-3 p-6 lg:max-w-[445px] lg:gap-7">
      <h2 className="text-primary-orange font-bold text-xs tracking-[1.85px] uppercase">
        Sneaker Company
      </h2>
      <h1 className="font-bold text-[28px] leading-[32px]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[15px] text-[#69707d] lg:mt-2">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between lg:flex-col lg:items-start">
        <p className="flex gap-4 items-center">
          <span className="font-bold text-[28px]">$125.00</span>
          <span className="text-base font-bold bg-pale-orange text-primary-orange px-2 rounded-md">
            50%
          </span>
        </p>
        <p className="text-[#b6bcc8] font-bold text-base line-through">
          $250.00
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:mt-2">
        <div
          className="w-full bg-[#f6f8fd] h-14 rounded-xl flex items-center justify-between px-5 lg:max-w-[157px]"
          onClick={handleClickNum}
        >
          <div className="calculate minus p-3">
            <img src="./icon-minus.svg" alt="minus" />
          </div>

          <span className="text-base font-bold">{productsNum}</span>
          <div className="calculate plus p-3 ">
            <img src="./icon-plus.svg" alt="plus" />
          </div>
        </div>
        <button
          className="bg-primary-orange hover:bg-[#DB5F13] shadow-[0px_20px_50px_-20px_rgba(255,126,27,1.0)] flex items-center py-3 w-full rounded-xl justify-center gap-2 lg:w-[272px]"
          onClick={handleAddCart}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>
          <span className="text-neutral-white text-base font-bold">
            Add to cart
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
