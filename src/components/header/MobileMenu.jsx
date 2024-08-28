import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function MobileMenu({ isOpen }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-140%" }}
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-4 bg-primary absolute top-8 -left-2 w-2/3 p-4 lg:hidden rounded-md shadow-md text-white`}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}

export default MobileMenu;
