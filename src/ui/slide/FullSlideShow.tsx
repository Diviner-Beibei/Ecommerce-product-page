import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { useSlide } from "../../contexts/SlideContext";
import SlideList from "./SlideList";

function FullSlideShow() {
  const { slideIndex, slideMove, switchFull } = useSlide();

  function handleClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const node = (e.target as Element).closest("button");
    if (node) switchFull();
  }

  const [springs, api] = useSpring(() => ({
    from: { opacity: 1 },
    config: {
      duration: 1000,
    },
  }));

  function animation() {
    api.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    slideMove(e);
    animation();
  }

  return (
    <div className="w-full h-full absolute top-0 left-0 grid place-content-center">
      <div className="w-full h-full bg-black opacity-80 absolute"></div>
      <div className="z-10 max-w-[550px] max-h-[722px] flex flex-col gap-5">
        <button className="group self-end" onClick={handleClose}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
              className="group-hover:fill-primary-orange"
            />
          </svg>
        </button>

        <animated.div
          style={{
            backgroundImage: `url(./image-product-${slideIndex}.jpg)`,
            ...springs,
          }}
          className={`relative bg-cover flex w-[550px] h-[550px] rounded-xl will-change-[opacity]`}
          onClick={handleClick}
        >
          <div className="absolute right-0 top-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-neutral-white  flex items-center justify-center slide next">
            <img src="./icon-next.svg" alt=" next" />
          </div>
          <div className="absolute left-0 top-1/2 translate-x-[-50%] w-10 h-10 rounded-full bg-neutral-white flex items-center justify-center slide previous">
            <img src="./icon-previous.svg" alt="previous" />
          </div>
        </animated.div>
        <SlideList isFull={true} animation={animation} />
      </div>
    </div>
  );
}

export default FullSlideShow;
