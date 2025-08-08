import React from "react"; //, { useState }

interface ProjectCard {
    id: number;
    title: string;
    description: string;
    category: string;
    year: string;
    image: string;
    bgColor: string;
}

const Portfolio: React.FC = () => {
    // const [activeTab, setActiveTab] = useState("systematic");

    const projects: ProjectCard[] = [
        {
            id: 1,
            title: "KaoTu Mobile 5.0",
            description: "A comprehensive mobile platform",
            category: "UI-App",
            year: "2021",
            image: "/api/placeholder/300/200",
            bgColor: "from-purple-600 to-purple-800",
        },
        {
            id: 2,
            title: "KaoTu Activity Poster",
            description: "Part of the operational activity poster series",
            category: "Graphic Design",
            year: "2021",
            image: "/api/placeholder/300/200",
            bgColor: "from-blue-600 to-blue-800",
        },
        {
            id: 3,
            title: "October Personal Portfolio",
            description: "Personal portfolio collection",
            category: "UI-App",
            year: "2020",
            image: "/api/placeholder/300/200",
            bgColor: "from-green-600 to-green-800",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
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
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                    >
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
                                        {/* Mock project preview */}
                                        {index === 0 && (
                                            <div className="relative">
                                                <div className="w-16 h-28 bg-gray-800 rounded-lg flex items-center justify-center">
                                                    <div className="w-12 h-20 bg-orange-400 rounded-md flex flex-col justify-between p-2">
                                                        <div className="flex justify-between">
                                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <div className="w-8 h-1 bg-white/80 rounded"></div>
                                                            <div className="w-6 h-1 bg-white/60 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {index === 1 && (
                                            <div className="text-2xl font-bold text-orange-500">
                                                POSTER
                                                <br />
                                                <span className="text-sm text-gray-600">
                                                    AHS
                                                </span>
                                            </div>
                                        )}
                                        {index === 2 && (
                                            <div className="text-xl font-bold tracking-widest text-gray-800">
                                                PORTFOLIO
                                            </div>
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
                ))}
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
