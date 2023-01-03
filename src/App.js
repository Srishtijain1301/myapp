import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Faq from "./Faq";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
