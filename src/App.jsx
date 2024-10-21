import { useReducer, useState } from "react";
import { MoviContex, ThemeContex } from "./contex";
import Page from "./Page";
import { cardReducer, initialState } from "./reducers/cartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cardReducer, initialState);
  return (
    <>
      <ThemeContex.Provider value={{ darkMode, setDarkMode }}>
        <MoviContex.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MoviContex.Provider>
      </ThemeContex.Provider>
    </>
  );
}

export default App;
