import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
    return (
        <BrowserRouter>
          <Navbar />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties/:id" element={<PropertyDetails />}/>
          </Routes>

          <Footer />
        </BrowserRouter>
    );
}

export default App;