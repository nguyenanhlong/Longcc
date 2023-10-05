import Product from "../product/Product";
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
      <Apparel/>
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