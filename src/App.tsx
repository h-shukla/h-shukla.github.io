import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
    return (
        <Router>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
