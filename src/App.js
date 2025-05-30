import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    {/* <Route path="about" element={<AboutPage />} /> */}
                    {/* Add more routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
