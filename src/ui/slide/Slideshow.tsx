import SlideList from "./SlideList";
import { useSlide } from "../../contexts/SlideContext";

function Slideshow() {
  const { slideIndex, slideMove, switchFull } = useSlide();
  const lg = window.matchMedia("(min-width: 1024px)");

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const node = (e.target as Element).closest(".slide");
    if (node) {
      slideMove(e);
      return;
    }

    if (lg.matches) {
      switchFull();
    }
  }

  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(./image-product-${slideIndex}.jpg)` }}
        className={`min-w-[375px] min-h-[300px] md:min-h-[400px] bg-cover flex justify-between items-center lg:min-w-[445px] lg:min-h-[445px] lg:rounded-xl`}
        onClick={handleClick}
      >
        <div className="w-10 h-10 rounded-full bg-neutral-white  flex items-center justify-center ml-8 slide previous lg:hidden">
          <img src="./icon-previous.svg" alt="previous" />
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-white flex items-center justify-center mr-8 slide next lg:hidden">
          <img src="./icon-next.svg" alt="next" />
        </div>
      </div>

      <SlideList isFull={false} animation={null} />
    </div>
  );
}

export default Slideshow;
