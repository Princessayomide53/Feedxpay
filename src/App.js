import "./App.css";
import Hero from "./components/Layout/Hero/Hero";
import Nav from "./components/Layout/NavBar/Nav";
import Main from "./components/Layout/Main/Main";
import Part from "./components/Layout/Part/Part";
import Join from "./components/Layout/Join/Join";
import Footer from "./components/Layout/Footer/Footer";
import { useState } from "react";
import Products from "./components/Layout/NavBar/Products";
// import RouterComponent from "./components/Layout/RouterComponent/RouterComponent";
// import Subscribe from "./components/Layout/Footer/Subscribe";

function App() {
  const [modal, setModals] = useState(false);

  const openModal = () => {
    setModals(true);
  };
  const closeModal = () => {
    setModals(false);
  };

  return (
    <div>
      <Nav onClick={openModal} />
      {modal && <Products onHideModal={closeModal} />}
      <Hero />
      <Main />
      <Part />
      <Join />
      <Footer />
      {/* <RouterComponent /> */}
      {/* <Subscribe /> */}
      {/* <Patners /> */}
    </div>
  );
}

export default App;
