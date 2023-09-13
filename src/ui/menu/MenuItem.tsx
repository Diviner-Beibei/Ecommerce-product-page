interface MenuItemProps {
  name: string;
  menuState: string;
}

function MenuItem({ name, menuState }: MenuItemProps) {
  return (
    <li className={`menubtn relative`}>
      {name}
      {menuState === name && (
        <div className="hidden bg-primary-orange w-full h-[2px] absolute top-[60px] lg:block"></div>
      )}
    </li>
  );
}

export default MenuItem;
