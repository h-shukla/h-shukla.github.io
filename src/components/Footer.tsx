const Footer = () => {
    return (
        <div>
            <footer className=" text-white py-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-sm">
                            ! © {new Date().getFullYear()} - Himanshu Shukla.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href=""
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
