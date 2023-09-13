import { useSlide } from "./contexts/SlideContext";

interface SlideItemProps {
  img: string;
  index: number;
}

function SlideItem({ img, index }: SlideItemProps) {
  const { slideIndex } = useSlide();

  return (
    <li
      className={`slide-item item-${index} w-[88px] rounded-lg overflow-hidden relative group`}
    >
      <img src={img} alt="product-1" />
      <div
        className={`${
          slideIndex === index ? "opacity-50" : "opacity-0"
        } bg-white  absolute w-full h-full left-0 top-0 group-hover:opacity-30`}
      ></div>
    </li>
  );
}

export default SlideItem;
