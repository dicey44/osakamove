import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import Search from "./pages/Search";
import ListingDetails from "./pages/ListingDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
          <Navbar />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/listings/:id" element={<ListingDetails />} />
          </Routes>

          <Footer />
        </BrowserRouter>
    );
}

export default App;