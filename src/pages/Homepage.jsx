import Products from "../components/home/Products";
import Slider from "../components/home/Slider";

const Homepage = () => {
  return (
    <>
      <Slider />
      <div className="container mx-auto">
        <Products />
      </div>
    </>
  );
};
export default Homepage;
