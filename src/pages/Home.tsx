const Home = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Import Google Fonts directly in the component */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
            `}</style>

            {/* Background SEO text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <h1
                    className="text-[20rem] font-bold text-white tracking-wider"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                >
                    HSHUKLA
                </h1>
            </div>

            {/* Main content container */}
            <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 lg:gap-16">
                {/* Mobile: Top text content (Welcome and Intro) */}
                <div className="lg:hidden space-y-4 text-white text-center">
                    <div className="space-y-1">
                        <h2
                            className="text-2xl font-bold"
                            style={{ fontFamily: "Pacifico, cursive" }}
                        >
                            Welcome 👋
                        </h2>
                        <h3
                            className="text-xl font-semibold"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                            I'm Himanshu Shukla
                        </h3>
                    </div>

                    <div
                        className="space-y-2 text-gray-300 text-sm"
                        style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                        <p>
                            Software Developer with a focus on crafting
                            efficient and scalable solutions
                        </p>
                        <p>
                            Dedicated to continual learning and thoughtful
                            problem-solving
                        </p>
                    </div>
                </div>

                {/* Desktop: Left content (Welcome and Intro) */}
                <div className="hidden lg:block space-y-6 text-white flex-1 max-w-md">
                    <div className="space-y-2">
                        <h2
                            className="text-3xl xl:text-4xl font-bold"
                            style={{ fontFamily: "Pacifico, cursive" }}
                        >
                            Welcome 👋
                        </h2>
                        <h3
                            className="text-2xl xl:text-3xl font-semibold"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                            I'm Himanshu Shukla
                        </h3>
                    </div>

                    <div
                        className="space-y-3 text-gray-300"
                        style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                        <p className="text-base leading-relaxed">
                            Software Developer with a focus on crafting
                            efficient and scalable solutions
                        </p>
                        <p className="text-base leading-relaxed">
                            Dedicated to continual learning and thoughtful
                            problem-solving
                        </p>
                    </div>
                </div>

                {/* Center - Image */}
                <div className="relative flex justify-center items-center flex-shrink-0">
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <img
                                src="/hero.png"
                                alt="Hero Character"
                                className="w-full h-full object-cover rounded-full shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile: Experience and Technologies - FIXED VERSION */}
                <div className="lg:hidden w-full text-white text-center space-y-6 mt-8">
                    <div>
                        <h4
                            className="text-xl font-semibold mb-3"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                            Experience
                        </h4>
                        <ul
                            className="list-disc list-inside text-gray-300 space-y-2 text-sm text-left max-w-sm mx-auto"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                            <li>2 years in full-stack development</li>
                            <li>
                                Collaborated on cross-functional teams to
                                deliver enterprise-grade products
                            </li>
                            <li>
                                Experience in designing scalable systems and
                                efficient user experiences
                            </li>
                            <li>
                                Worked with startups and to develop innovative
                                new products and to understand their market
                                better
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4
                            className="text-xl font-semibold mb-3"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                            Technologies
                        </h4>
                        {/* Fixed: Removed max-w-xs constraint and improved grid layout */}
                        <div
                            className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-sm max-w-sm mx-auto"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                            <span>👉 React.js</span>
                            <span>👉 Next.js</span>
                            <span>👉 TypeScript</span>
                            <span>👉 Node.js</span>
                            <span>👉 Tailwind CSS</span>
                            <span>👉 Figma</span>
                            <span>👉 MongoDB</span>
                            <span>👉 .Net Core & MVC</span>
                        </div>
                    </div>
                </div>

                {/* Desktop: Right content - Experience and Technologies (Existing block) */}
                <div className="hidden lg:block flex-1 max-w-md space-y-6 text-white">
                    <div>
                        <h4
                            className="text-xl font-semibold mb-2"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                            Experience
                        </h4>
                        <ul
                            className="list-disc list-inside text-gray-300 space-y-1 text-base"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                            <li>2 years in full-stack development</li>
                            <li>
                                Collaborated on cross-functional teams to
                                deliver enterprise-grade products
                            </li>
                            <li>
                                Experience in designing scalable systems and
                                efficient user experiences
                            </li>
                            <li>
                                Worked with startups and to develop innovative
                                new products and to understand their market
                                better
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4
                            className="text-xl font-semibold mb-2"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                            Technologies
                        </h4>
                        <div
                            className="grid grid-cols-2 gap-2 text-gray-300 text-base"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                            <span>👉 React.js</span>
                            <span>👉 Next.js</span>
                            <span>👉 TypeScript</span>
                            <span>👉 Node.js</span>
                            <span>👉 Tailwind CSS</span>
                            <span>👉 Figma</span>
                            <span>👉 MongoDB</span>
                            <span>👉 .Net Core & MVC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
