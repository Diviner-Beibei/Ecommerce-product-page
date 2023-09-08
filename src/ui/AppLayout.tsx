import { useState } from "react";

import Menu from "./menu";
import NavBar from "./NavBar";
import Product from "./Product";

function AppLayout() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpenMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e.target);
    const node = (e.target as Element).closest(".menu");
    if (node) {
      if (node.classList.contains("open") || node.classList.contains("close")) {
        setIsOpenMenu((open) => !open);
      }
    }
  }

  return (
    <div className="overflow-hidden relative">
      {isOpenMenu && <Menu switchMenu={handleOpenMenu} />}
      <header>
        <NavBar switchMenu={handleOpenMenu} />
      </header>
      <main>
        <Product />
      </main>
    </div>
  );
}

export default AppLayout;
