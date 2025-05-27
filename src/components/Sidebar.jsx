import React, { useState } from "react";
import {
    Home,
    User,
    Settings,
    Mail,
    Calendar,
    FileText,
    Search,
    Bell,
    Plus,
} from "lucide-react";

const Sidebar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const dockItems = [
        { icon: Home, label: "Home", color: "bg-blue-500" },
        { icon: User, label: "Profile", color: "bg-purple-500" },
        { icon: Mail, label: "Messages", color: "bg-green-500" },
        { icon: Calendar, label: "Calendar", color: "bg-orange-500" },
        { icon: FileText, label: "Documents", color: "bg-yellow-500" },
        { icon: Search, label: "Search", color: "bg-pink-500" },
        { icon: Bell, label: "Notifications", color: "bg-red-500" },
        { icon: Settings, label: "Settings", color: "bg-gray-500" },
    ];

    const getItemScale = (index) => {
        if (hoveredIndex === null) return 1;

        const distance = Math.abs(hoveredIndex - index);
        if (distance === 0) return 1.4;
        if (distance === 1) return 1.2;
        if (distance === 2) return 1.1;
        return 1;
    };

    const getItemTranslateX = (index) => {
        if (hoveredIndex === null) return 0;

        const distance = Math.abs(hoveredIndex - index);
        const direction = hoveredIndex > index ? 1 : -1;

        if (distance === 0) return -12;
        if (distance === 1) return direction * -8;
        if (distance === 2) return direction * -4;
        return 0;
    };

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
            {/* Dock Container */}
            <div className="relative">
                {/* Background blur */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"></div>

                {/* Dock Items */}
                <div className="relative p-3 flex flex-col gap-2">
                    {dockItems.map((item, index) => {
                        const Icon = item.icon;
                        const scale = getItemScale(index);
                        const translateX = getItemTranslateX(index);

                        return (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Tooltip */}
                                <div
                                    className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1
                    bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none
                    transition-all duration-200 ${
                        hoveredIndex === index
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-2"
                    }`}
                                >
                                    {item.label}
                                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                                </div>

                                {/* Icon Button */}
                                <button
                                    className={`relative w-12 h-12 rounded-xl ${item.color}
                    flex items-center justify-center text-white
                    transition-all duration-300 ease-out cursor-pointer
                    hover:shadow-lg active:scale-95`}
                                    style={{
                                        transform: `scale(${scale}) translateX(${translateX}px)`,
                                    }}
                                >
                                    <Icon size={20} />

                                    {/* Glow effect on hover */}
                                    <div
                                        className={`absolute inset-0 rounded-xl ${
                                            item.color
                                        } opacity-0
                      transition-opacity duration-300 blur-sm -z-10
                      ${hoveredIndex === index ? "opacity-50" : ""}`}
                                    ></div>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom floating action button */}
                <div className="relative mt-2 p-3 pt-0">
                    <div className="w-full h-px bg-white/20 mb-3"></div>
                    <button
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl
              flex items-center justify-center text-white transition-all duration-300
              hover:scale-110 hover:shadow-lg active:scale-95 group"
                        onMouseEnter={() => setHoveredIndex(-1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Plus
                            size={20}
                            className="transition-transform duration-300 group-hover:rotate-90"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
