// import { useState } from "react";
import Logo from "./Logo";
import User from "./User";
import MenuList from "./MenuList";
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
    <div className="p-5 lg:py-10 lg:px-24">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center lg:gap-10 lg:items-start">
          <div className="menu open lg:hidden" onClick={switchMenu}>
            <img src="./icon-menu.svg" alt="menu open" />
          </div>
          <Logo />
          <div className="hidden lg:block">
            <MenuList />
          </div>
        </div>
        <div className="flex gap-4 items-center lg:gap-10 lg:items-start">
          <div className="cart relative" onClick={handleCartClick}>
            {itemCount > 0 && (
              <span className="bg-primary-orange absolute top-[-11px] right-[-12px] font-bold text-white text-[10px] px-[10px] py-[1px] rounded-xl">
                {itemCount}
              </span>
            )}

            <img src="./icon-cart.svg" alt="cart" />
            {isOpenCart && <Cart />}
          </div>
          <User />
        </div>
      </div>

      <div className="hidden h-[1px] bg-[#e4e9f2] lg:block"></div>
    </div>
  );
}

export default NavBar;
