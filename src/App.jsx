import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
