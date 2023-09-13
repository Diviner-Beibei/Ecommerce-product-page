import { useState } from "react";
import MenuItem from "./MenuItem";

const menus = ["Collections", "Men", "Women", "About", "Contact"];

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
        {menus.map((e) => (
          <MenuItem key={e} name={e} menuState={menuState} />
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
