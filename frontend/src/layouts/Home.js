import Deal from "../Pages/home/Deal";
import Items from "../Pages/home/Items";
import Region from "../Pages/home/Region";
import Apparel from "../Pages/home/Apparel";
import Request from "../Pages/home/Request";
import Service from "../Pages/home/Service";
import Slider from "../Pages/home/Slider";
import Subscribe from "../Pages/home/Subscribe";
import CategoryBanner from "../Pages/home/CategoryBanner";
import Brand from "../Pages/home/Brand";


function Home(props) {
  return (
    <>
     <Slider/>
    <div className="container">
      <CategoryBanner/>
      <Items/>
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