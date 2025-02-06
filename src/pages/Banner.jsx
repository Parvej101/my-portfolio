import { motion } from "framer-motion";
import profilePic from "/images/parvej-banner.jpg";

const Banner = () => {
    return (
        <div className="w-full bg-gradient-to-r from-red-400 py-16 to-orange-400 flex flex-col md:flex-row items-center justify-center  text-black px-6 md:px-16">
            {/* Left Section - Text Info */}
            <motion.div
                className="md:w-1/2 text-center md:text-left space-y-5"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Hi, I'm <span className="text-yellow-300">MH Parvej</span>
                </h1>
                <p className="text-2xl md:text-xl text-gray-200 max-w-lg">
                    A passionate <span className="font-semibold text-white">Frontend Developer</span> who loves crafting
                    interactive and responsive web applications.
                </p>
                <div className="flex justify-center md:justify-start gap-6 mt-6">
                    <a href="https://docs.google.com/document/d/e/2PACX-1vT2HZLgQzhyhgF8FUt3XrBSEQwDhN6LRGeXptyFSWWABhRJ-5lkUeKS-XzDkHlN2OOKjZYsFjxvQOv9/pub" target="#" download className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-transform transform hover:scale-105">
                        Download Resume
                    </a>
                    <a href="#contact" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105">
                        Contact Me
                    </a>
                </div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
                className="md:w-1/2 flex justify-center mt-12 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <img
                        src={profilePic}
                        alt="Parvej"
                        className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-yellow-400"
                    />
                    {/* Animated Floating Effect */}
                    <motion.div
                        className="absolute top-2 left-2 w-full h-full bg-white opacity-20 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
