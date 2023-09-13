import { useState } from "react";

import Menu from "./Menu";
import NavBar from "./NavBar";
import Product from "./Product";
import FullSlideShow from "./FullSlideShow";
import { useSlide } from "./contexts/SlideContext";

function AppLayout() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isOpenFull } = useSlide();

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
      {isOpenFull && <FullSlideShow />}
    </div>
  );
}

export default AppLayout;
