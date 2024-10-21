import { useState } from "react";
import { MoviContex, ThemeContex } from "./contex";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContex.Provider value={{ darkMode, setDarkMode }}>
        <MoviContex.Provider value={{ cartData, setCartData }}>
          <Page />
        </MoviContex.Provider>
      </ThemeContex.Provider>
    </>
  );
}

export default App;
