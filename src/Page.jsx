import Header from "./component/Header";
import SideBar from "./component/SideBar";
import MoviList from "./component/Cina/MoviList";
import Footer from "./component/Footer";
import { useContext } from "react";
import { ThemeContex } from "./contex";

const Page = () => {
  const { darkMode } = useContext(ThemeContex);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MoviList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
