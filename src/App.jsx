import "./App.css";
import Footer from "./Components/Footer";
import Manager from "./Components/Manager";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      
      <Navbar />
    
      <div className="min-h-screen">
      <Manager />
      </div>

      <Footer />
      <ToastContainer/>

    </>
  );
}

export default App;
