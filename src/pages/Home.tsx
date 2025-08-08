const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#344042] via-[#154028] to-[#130742] relative overflow-hidden">
            {/* Background SEO text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <h1 className="text-[20rem] font-bold text-white tracking-wider">
                    HSHUKLA
                </h1>
            </div>

            {/* Main content container */}
            <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 lg:gap-16">
                {/* Mobile: Top text content */}
                <div className="lg:hidden space-y-4 text-white text-center">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold">Hello 👋,</h2>
                        <h3 className="text-xl font-bold">
                            I'm San Qiu Shi Ji
                        </h3>
                        <p className="text-sm text-purple-200 uppercase tracking-wider">
                            A BRAVE CLIMBER IN THE WORLD OF PRODUCT DESIGN
                        </p>
                    </div>

                    <div className="space-y-2 text-gray-300 text-sm">
                        <p>
                            A product designer with unlimited creative potential
                        </p>
                        <p>
                            With a curious heart and boundless imagination to
                            explore
                        </p>
                        <p className="text-xs text-purple-300">
                            This quote comes from Smao
                        </p>
                    </div>
                </div>

                {/* Desktop: Left content */}
                <div className="hidden lg:block space-y-6 text-white flex-1 max-w-md">
                    <div className="space-y-2">
                        <h2 className="text-3xl xl:text-4xl font-bold">
                            Hello 👋,
                        </h2>
                        <h3 className="text-2xl xl:text-3xl font-bold">
                            I'm San Qiu Shi Ji
                        </h3>
                        <p className="text-base text-purple-200 uppercase tracking-wider">
                            A BRAVE CLIMBER IN THE WORLD OF PRODUCT DESIGN
                        </p>
                    </div>

                    <div className="space-y-3 text-gray-300">
                        <p className="text-base leading-relaxed">
                            A product designer with unlimited creative potential
                        </p>
                        <p className="text-base leading-relaxed">
                            With a curious heart and boundless imagination to
                            explore
                        </p>
                        <p className="text-sm text-purple-300">
                            This quote comes from Smao
                        </p>
                    </div>
                </div>

                {/* Center - Image without background circle */}
                <div className="relative flex justify-center items-center flex-shrink-0">
                    {/* Character illustration - clean without background circle */}
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

                {/* Desktop: Right content (empty for now, can add additional content) */}
                <div className="hidden lg:block flex-1 max-w-md">
                    {/* This space can be used for additional content or kept empty for balance */}
                </div>
            </div>

            {/* Right side note - Desktop only */}
            <div className="hidden xl:block absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-sm max-w-xs space-y-2">
                <p>If the page doesn't load properly,</p>
                <p>
                    please press the "Full Screen" button to refresh and get the
                    feeling
                </p>
                <p>of "Z key" to adjust the view size</p>
                <br />
                <p>All designs outside of Figma need to be</p>
                <p>re-optimized. This is a Figma-specific design issue,</p>
                <p>not a problem with the design itself.</p>
                <br />
                <p className="text-purple-300">
                    Beta version, does not represent the final result.
                </p>
            </div>

            {/* Mobile bottom note */}
            <div className="xl:hidden absolute bottom-8 left-6 right-6 text-white text-xs space-y-1 text-center">
                <p className="text-purple-300">
                    Beta version, does not represent the final result.
                </p>
            </div>
        </div>
    );
};

export default Home;
