import SlideItem from "./SlideItem";
import { useSlide } from "./contexts/SlideContext";

interface SlideListProps {
  isFull: boolean;
}

function SlideList({ isFull }: SlideListProps) {
  const { slideIndex, slideImgs, slideSetNum } = useSlide();

  function handleSelectSlide(
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) {
    const node = (e.target as Element).closest(".slide-item");
    if (node) {
      node.classList.forEach((e) => {
        console.log(e);
        if (e.startsWith("item-")) {
          const index = Number(e.slice(-1));
          if (index === slideIndex) return;

          slideSetNum(index);
        }
      });
    }
  }

  let styleUl = "hidden mt-6 lg:flex lg:justify-between";
  if (isFull) {
    styleUl = "mt-6 flex justify-between px-10";
  }

  return (
    <ul className={styleUl} onClick={handleSelectSlide}>
      {slideImgs.map((e, index) => (
        <SlideItem key={e} img={e} index={index + 1} />
      ))}
    </ul>
  );
}

export default SlideList;
