import ProductDescription from "./ProductDescription";
import Slideshow from "./Slideshow";

function Product() {
  return (
    <div className="py-8 lg:flex lg:justify-around lg:items-center">
      <Slideshow />
      <ProductDescription />
    </div>
  );
}

export default Product;
