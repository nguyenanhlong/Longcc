import Product from "../product/Product";
import ProductSale from "../product/ProductSale";
import Apparel from "./Apparel";
import Brand from "./Brand";
import CategoryBanner from "./CategoryBanner";
import Deal from "./Deal";
//import Items from "./Items";
import Request from "./Request";
import Service from "./Service";
import Slider from "./Slider";
import Subscribe from "./Subscribe";


function Home() {
  return (
  <>
     <Slider/>
    <div className="container">
      <CategoryBanner/>
      <Product/>
      <ProductSale/>
      <Deal/>
      <Request/>
      <Service/>
      <Brand/>
    </div>
    <Subscribe/>
  </>
  );
}
export default Home;