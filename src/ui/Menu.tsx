import MenuList from "./MenuList";

interface MenuProps {
  switchMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Menu({ switchMenu }: MenuProps) {
  return (
    <div
      className={`absolute h-full w-full pl-8 pt-8`}
      style={{
        background: `linear-gradient(to right,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(0,0,0,0.75) 70%,rgba(0,0,0,0.75) 100%)`,
      }}
    >
      <div className="menu close mb-10" onClick={switchMenu}>
        <img src="./icon-close.svg" alt="menu close" />
      </div>
      <MenuList />
    </div>
  );
}

export default Menu;
