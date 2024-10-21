import Logo from "../assets/logo.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Ring from "../assets/ring.svg";
import shopping_cart from "../assets/shopping-cart.svg";
import ShopingCart from "./ShopingCart";
import { useContext, useState } from "react";
import { MoviContex, ThemeContex } from "../contex";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MoviContex);
  const { darkMode, setDarkMode } = useContext(ThemeContex);
  const handelClose = () => {
    setShowCart(false);
  };
  const handelOpen = () => {
    setShowCart(true);
  };

  return (
    <>
      {showCart && <ShopingCart onClose={handelClose} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="Logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="Ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="Moon"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={shopping_cart}
                  width="24"
                  height="24"
                  alt="shopping_cart"
                  onClick={handelOpen}
                />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
