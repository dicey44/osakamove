import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PropertyDetails from "./pages/PropertyDetails";

function RedirectHandler() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");

    if (redirect) {
        return <Navigate to={`/osakamove${redirect}`} replace />;
    }

    return null;
}

function App() {
    return (
        <BrowserRouter>
            <RedirectHandler />

          <Navbar />

          <Routes>
              <Route path="/osakamove" element={<Home />} />
              <Route path="/osakamove/properties/:id" element={<PropertyDetails />}/>
          </Routes>

          <Footer />
        </BrowserRouter>
    );
}

export default App;