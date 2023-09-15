// import { useState } from "react";
import Logo from "./Logo";
import User from "./User";
import MenuList from "./menu/MenuList";
import Cart from "./cart/Cart";
import { useCart } from "../contexts/CartContext";

interface NavBarProps {
  switchMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function NavBar({ switchMenu }: NavBarProps) {
  const { itemCount, isOpenCart, switchCart } = useCart();

  function handleCartClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const node = (e.target as Element).closest(".cart");
    if (node) {
      console.log(node);
      switchCart();
    }
  }

  return (
    <div className="p-5 lg:py-7 lg:px-24">
      <div className="flex justify-between lg:items-center">
        <div className="flex gap-4 items-center lg:gap-10 lg:items-start">
          <div className="menu open lg:hidden" onClick={switchMenu}>
            <img src="./icon-menu.svg" alt="menu open" />
          </div>
          <Logo />
          <div className="hidden lg:block">
            <MenuList />
          </div>
        </div>
        <div className="flex gap-4 items-center lg:gap-10 lg:self-center">
          <div className="cart relative group" onClick={handleCartClick}>
            {itemCount > 0 && (
              <span className="bg-primary-orange absolute top-[-11px] right-[-12px] font-bold text-white text-[10px] px-[10px] py-[1px] rounded-xl">
                {itemCount}
              </span>
            )}

            {/* <img src="./icon-cart.svg" alt="cart" /> */}
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
                className="group-hover:fill-primary-orange"
              />
            </svg>
            {isOpenCart && <Cart />}
          </div>
          <User />
        </div>
      </div>

      <div className="hidden h-[1px] mt-6 bg-[#e4e9f2] lg:block"></div>
    </div>
  );
}

export default NavBar;
