import { useState } from "react";

function MenuList() {
  const [menuState, setMenuState] = useState("Collections");

  function handleClickMenu(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    console.log(e.target);
    const node = (e.target as Element).closest(".menubtn");
    if (node) {
      console.log(node.textContent);
      setMenuState(node.textContent || "");
    }
  }

  return (
    <div>
      <ul
        className="text-[18px] font-bold flex flex-col gap-2 lg:flex-row lg:text-[15px] lg:font-normal lg:gap-6"
        onClick={handleClickMenu}
      >
        <li
          className={`menubtn lg:pb-10 ${
            menuState === "Collections"
              ? "border-b-[2px] border-primary-orange"
              : ""
          }`}
        >
          Collections
        </li>
        <li
          className={`menubtn lg:pb-10 ${
            menuState === "Men" ? "border-b-[2px] border-primary-orange" : ""
          }`}
        >
          Men
        </li>
        <li
          className={`menubtn lg:pb-10 ${
            menuState === "Women" ? "border-b-[2px] border-primary-orange" : ""
          }`}
        >
          Women
        </li>
        <li
          className={`menubtn lg:pb-10 ${
            menuState === "About" ? "border-b-[2px] border-primary-orange" : ""
          }`}
        >
          About
        </li>
        <li
          className={`menubtn lg:pb-10 ${
            menuState === "Contact"
              ? "border-b-[2px] border-primary-orange"
              : ""
          }`}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
