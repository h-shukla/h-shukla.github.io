import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <div className="bg-gradient-to-br from-[#1c1c1c] to-[#1c1c1c] min-h-screen">
                <Navbar />
                <div className="bg-gradient-to-bl from-[#344042] via-[#154028] to-[#130742]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
