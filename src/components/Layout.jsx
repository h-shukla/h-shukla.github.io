import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SplashCursor from "./SplashCursor";

const Layout = () => {
    return (
        <div className="app-container text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <SplashCursor />
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <div className="page-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
