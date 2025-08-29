import React from "react"; //, { useState }

interface ProjectCard {
    id: number;
    title: string;
    description: string;
    category: string;
    year: string;
    image: string;
    bgColor: string;
    link?: string; // Added link field
}

const Portfolio: React.FC = () => {
    // const [activeTab, setActiveTab] = useState("systematic");

    const projects: ProjectCard[] = [
        {
            id: 1,
            title: "Coming Soon",
            description:
                "A Design to Code solo project of Ecom platform made with MERN stack",
            category: "Full Stack App",
            year: "2025",
            image: "/api/placeholder/300/200",
            bgColor: "from-purple-600 to-purple-800",
            link: "", // No link yet
        },
        {
            id: 2,
            title: "Coming Soon",
            description: "A flutter frontend for the Ecom platform",
            category: "UI/UX & Mobile App Development",
            year: "??",
            image: "/api/placeholder/300/200",
            bgColor: "from-blue-600 to-blue-800",
            link: "", // No link yet
        },
        {
            id: 3,
            title: "Url Shortener",
            description: "An URL shortener web app with MERN stack",
            category: "Full Stack",
            year: "??",
            image: "/url-short.png",
            bgColor: "from-blue-600 to-blue-800",
            link: "https://github.com/h-shukla/url-short", // Example link
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 ">
            {/* Tab Navigation */}
            {/* <div className="flex justify-center mb-12">
                <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-1 border border-blue-700/30">
                    <button
                        onClick={() => setActiveTab("systematic")}
                        className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === "systematic"
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-blue-300 hover:text-white hover:bg-blue-700/50"
                        }`}
                    >
                        Systematic Works
                    </button>
                    <button
                        onClick={() => setActiveTab("daily")}
                        className={`px-8 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === "daily"
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-blue-300 hover:text-white hover:bg-blue-700/50"
                        }`}
                    >
                        Daily Practice
                    </button>
                </div>
            </div> */}

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => {
                    const cardContent = (
                        <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                            {/* Card Container */}
                            <div
                                className={`relative bg-gradient-to-br ${project.bgColor} rounded-2xl p-6 border border-purple-500/30 shadow-2xl overflow-hidden`}
                            >
                                {/* Background Year */}
                                <div className="absolute bottom-4 right-6 text-6xl font-bold text-white/10 select-none">
                                    {project.year}
                                </div>

                                {/* Project Image */}
                                <div className="relative z-10 mb-6">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                        <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                            {project.image &&
                                            !project.image.includes(
                                                "placeholder"
                                            ) ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="max-h-28 max-w-full object-contain rounded-md"
                                                />
                                            ) : (
                                                <span className="text-lg font-semibold text-gray-400">
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="relative z-10 text-white">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-purple-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/80 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Category Badge */}
                                    <div className="inline-block">
                                        <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </div>
                        </div>
                    );

                    // If link exists, wrap card in <a>
                    return project.link ? (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            {cardContent}
                        </a>
                    ) : (
                        <div key={project.id}>{cardContent}</div>
                    );
                })}
            </div>

            {/* View More Section */}
            <div className="text-center mt-12">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View All Projects
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
