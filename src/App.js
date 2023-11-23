import "./App.css";
import Hero from "./components/Layout/Hero/Hero";
import Nav from "./components/Layout/NavBar/Nav";
import Main from "./components/Layout/Main/Main";
import Part from "./components/Layout/Part/Part";
import Join from "./components/Layout/Join/Join";
import Footer from "./components/Layout/Footer/Footer";
// import Patners from "./components/Layout/Part/Patners";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Main />
      <Part />
      <Join />
      <Footer />
      {/* <Patners /> */}
    </div>
  );
}

export default App;
