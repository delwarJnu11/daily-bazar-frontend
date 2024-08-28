import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Navbar = () => {
  return (
    <div className="bg-secondary p-2 md:p-0">
      <div className="container mx-auto">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </div>
  );
};
export default Navbar;
