import { useState } from "react";

// const ITEM_INDEX = ["item-1"];

function Slideshow() {
  // const slideIndex = useRef(1);
  const [slideIndex, setSlideIndex] = useState(1);

  function handleSlide(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const node = (e.target as Element).closest(".slide");
    console.log(e.target);

    if (node) {
      if (node.classList.contains("previous")) {
        console.log("previous", slideIndex);
        if (slideIndex === 1) return;
        setSlideIndex((index) => --index);
      }
      if (node.classList.contains("next")) {
        console.log("next", slideIndex);
        if (slideIndex === 4) return;
        setSlideIndex((index) => ++index);
      }
    }
  }

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

          setSlideIndex(index);
        }
      });
    }
  }

  //   className={`min-w-[375px] min-h-[300px] md:min-h-[400px] bg-cover flex justify-between items-center lg:min-w-[445px] lg:min-h-[445px] lg:rounded-xl`}
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(./image-product-${slideIndex}.jpg)` }}
        className={`min-w-[375px] min-h-[300px] md:min-h-[400px] bg-cover flex justify-between items-center lg:min-w-[445px] lg:min-h-[445px] lg:rounded-xl`}
        onClick={handleSlide}
      >
        <div className="w-10 h-10 rounded-full bg-neutral-white  flex items-center justify-center ml-8 slide previous lg:hidden">
          <img src="./icon-previous.svg" alt="previous" />
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-white flex items-center justify-center mr-8 slide next lg:hidden">
          <img src="./icon-next.svg" alt="next" />
        </div>
      </div>
      <ul
        className="hidden mt-6 lg:flex lg:justify-between"
        onClick={handleSelectSlide}
      >
        <li
          className={`slide-item item-1 w-[88px] rounded-lg overflow-hidden ${
            slideIndex === 1 ? "opacity-50" : ""
          } hover:opacity-60`}
        >
          <img src="./image-product-1-thumbnail.jpg" alt="product-1" />
        </li>
        <li
          className={`slide-item item-2 w-[88px] rounded-lg overflow-hidden hover:opacity-60 ${
            slideIndex === 2 ? "opacity-50" : ""
          }`}
        >
          <img src="./image-product-2-thumbnail.jpg" alt="product-2" />
        </li>
        <li
          className={`slide-item item-3 w-[88px] rounded-lg overflow-hidden hover:opacity-60 ${
            slideIndex === 3 ? "opacity-50" : ""
          }`}
        >
          <img src="./image-product-3-thumbnail.jpg" alt="product-3" />
        </li>
        <li
          className={`slide-item item-4 w-[88px] rounded-lg overflow-hidden hover:opacity-60 ${
            slideIndex === 4 ? "opacity-50" : ""
          }`}
        >
          <img src="./image-product-4-thumbnail.jpg" alt="product-4" />
        </li>
      </ul>
    </div>
  );
}

export default Slideshow;
