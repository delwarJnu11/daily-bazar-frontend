import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { actions } from "../../actions";
import { api } from "../../api";
import { useUser } from "../../hooks/useUser";
import MobileMenu from "./MobileMenu";

function HeaderBottom() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const user = state?.user;
  const id = localStorage.getItem("_id");
  console.log(id);
  useEffect(() => {
    if (id) {
      const userDetails = async () => {
        try {
          dispatch({ type: actions.user.USER_DATA_FETCHING });
          const res = await api.get("/auth/user");

          if (res.data.success) {
            dispatch({
              type: actions.user.USER_DATA_FETCHED,
              user: res.data.user,
            });
          } else if (res.data.error) {
            dispatch({
              type: actions.user.USER_DATA_FETCHING_ERROR,
              error: res.data.message,
            });
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            dispatch({
              type: actions.user.USER_DATA_FETCHING_ERROR,
              error: "Unauthorized access. Please log in.",
            });
            navigate("/login");
          } else {
            dispatch({
              type: actions.user.USER_DATA_FETCHING_ERROR,
              error: error.message || "An unexpected error occurred.",
            });
          }
        }
      };

      userDetails();
    }
  }, [dispatch, navigate, id]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-between items-center py-4">
      {/* Hamburger Menu Button for Small Devices */}
      <div className="flex items-center lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {!isOpen ? <FiMenu /> : <RxCross1 />}
        </button>
      </div>

      {/* Main Navigation for Large Devices */}
      <nav className="hidden lg:flex flex-col gap-4 lg:gap-10 md:flex-row lg:flex-row xl:flex-row">
        <NavLink
          to="/"
          className="font-medium text-xl leading-10 tracking-wide"
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className="font-medium text-xl leading-10 tracking-wide"
        >
          Vegetables
        </NavLink>
        <NavLink
          to="/"
          className="font-medium text-xl leading-10 tracking-wide"
        >
          Fruits
        </NavLink>
        <NavLink
          to="/"
          className="font-medium text-xl leading-10 tracking-wide"
        >
          Fish & Meat
        </NavLink>
        <NavLink
          to="/"
          className="font-medium text-xl leading-10 tracking-wide"
        >
          Grocery
        </NavLink>
      </nav>

      {/* User-Related Icons */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-end gap-4 lg:gap-10 w-full lg:w-auto">
        <div className="flex items-center gap-2 text-xl font-medium">
          <FaRegHeart size={24} />
          <span className="hidden lg:inline">Wishlist</span>
        </div>
        <div className="flex items-center gap-2 text-xl font-medium">
          <FiShoppingCart size={24} />
          <span className="hidden lg:inline">Cart</span>
        </div>
        {!state?.user?._id && (
          <NavLink
            to={"/login"}
            className="flex items-center gap-2 text-xl font-medium"
          >
            <FiUser size={24} />
            <span className="hidden lg:inline">Login</span>
          </NavLink>
        )}
        {user?._id && (
          <div className="flex items-center gap-4 relative">
            <div
              className="flex items-center"
              onClick={() => setIsLogin(!isLogin)}
            >
              <img
                src={user?.image}
                alt=""
                className="w-11 h-11 rounded-full border-2 border-green-600 p-1"
              />
              {isLogin ? (
                <MdKeyboardArrowUp size={25} />
              ) : (
                <MdKeyboardArrowDown size={25} />
              )}
            </div>

            {isLogin && (
              <div
                className={`absolute top-[60px] right-0 bg-gray-100 px-4 pb-4 pt-2 z-30 rounded-bl-md rounded-br-md flex items-center justify-center flex-col transition-all duration-1000 ease-out transform ${
                  isLogin ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <strong className="mb-4">
                  {state?.user?.firstName} {state?.user?.lastName}
                </strong>
                <button className="bg-red-600 text-white text-sm font-semibold uppercase px-6 py-2 rounded-md">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu for Small Devices */}
      <MobileMenu isOpen={isOpen} />
    </div>
  );
}

export default HeaderBottom;
