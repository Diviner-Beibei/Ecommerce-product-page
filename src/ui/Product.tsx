import ProductDescription from "./ProductDescription";
import Slideshow from "./slide/Slideshow";

function Product() {
  return (
    <div className="pt-1 lg:py-8 lg:flex lg:justify-around lg:items-center">
      <Slideshow />
      <ProductDescription />
    </div>
  );
}

export default Product;
