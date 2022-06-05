import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import NavOptions from "./components/NavOptions.js";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data/data.json";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar logo={data.logo} />
      <Routes>
        <Route
          exact
          path="/miphones"
          element={<NavOptions miPhones={data.miPhones} />}
        />
        <Route
          exact
          path="/redmiphones"
          element={<NavOptions redmiPhones={data.redmiPhones} />}
        />
        <Route exact path="/tv" element={<NavOptions tv={data.tv} />} />
        <Route
          exact
          path="/laptop"
          element={<NavOptions laptop={data.laptop} />}
        />
        <Route
          exact
          path="/lifeStyle"
          element={
            <NavOptions fitnessAndLifeStyle={data.fitnessAndLifeStyle} />
          }
        />
        <Route exact path="/home" element={<NavOptions home={data.home} />} />
        <Route
          exact
          path="/audio"
          element={<NavOptions audio={data.audio} />}
        />
        <Route
          exact
          path="/accessories"
          element={<NavOptions accessories={data.accessories} />}
        />
      </Routes>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/Music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />

        <Route
          exact
          path="/SmartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />

        <Route
          exact
          path="/Home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />

        <Route
          exact
          path="/Lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />

        <Route
          exact
          path="/MobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
