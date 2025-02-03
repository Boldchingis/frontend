import FoodCardModal from "./companents/foodCardModal";
import FoodAlert from "./webCompanents/foodAlert";
import Footer from "./webCompanents/footer";
import { Categories } from "./webCompanents/WebCategory";
import { Dishes } from "./webCompanents/DishCards";

import "./styles.css";
import Header from "./webCompanents/header";

export default function App() {


  return (
    <div>
      <Header/>
      <img className="w-full h-[900px]" src="homepic.png" />
     <div><Categories/></div>
    < Dishes/>
      {/* <FoodCardModal />
      <FoodAlert /> */}
      <Footer />
    </div>
  );
}
