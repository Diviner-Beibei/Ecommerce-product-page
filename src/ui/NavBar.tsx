// import { useState } from "react";
import Logo from "./Logo";
import User from "./User";
import MenuList from "./MenuList";

interface NavBarProps {
  switchMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function NavBar({ switchMenu }: NavBarProps) {
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
          <div className="cart">
            <img src="./icon-cart.svg" alt="cart" />
          </div>
          <User />
        </div>
      </div>

      <div className="hidden h-[1px] bg-[#e4e9f2] lg:block"></div>
    </div>
  );
}

export default NavBar;
