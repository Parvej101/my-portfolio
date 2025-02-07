import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "/images/parvej-banner.jpg";

const Banner = () => {
    return (
        <div className="w-full bg-gradient-to-r from-red-400 to-orange-400 py-24 md:py-32 flex flex-col md:flex-row items-center justify-center text-black px-6 md:px-16">
            {/* Left Section - Text Info */}
            <motion.div
                className="md:w-1/2 text-center md:text-left space-y-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Hi, I'm{" "}
                    <span className="text-yellow-300">MH Parvej</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-lg leading-relaxed">
                    A passionate <span className="font-semibold text-white">Frontend Developer</span> who loves crafting
                    interactive and responsive web applications.
                </p>

                {/* Continuous Typing Effect - Let's Go */}
                <div className="mt-6">
                    <TypeAnimation
                        sequence={[
                            "Let's Go!",
                            2000, // Wait for 2 seconds
                            "Let's Build Something Awesome!",
                            2000, // Wait for 2 seconds
                        ]}
                        speed={50} // Typing speed (in ms)
                        repeat={Infinity} // Continuously repeat the animation
                        className="text-xl  font-extrabold text-yellow-400"
                    />
                </div>

                <div className="flex justify-center md:justify-start gap-6 mt-6">
                    <motion.a
                        href="https://docs.google.com/document/d/e/2PACX-1vT2HZLgQzhyhgF8FUt3XrBSEQwDhN6LRGeXptyFSWWABhRJ-5lkUeKS-XzDkHlN2OOKjZYsFjxvQOv9/pub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Download Resume
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
                className="md:w-1/2 flex justify-center mt-12 md:mt-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <motion.img
                        src={profilePic}
                        alt="Parvej"
                        className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-yellow-400"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    {/* Animated Floating Effect */}
                    <motion.div
                        className="absolute top-2 left-2 w-full h-full bg-white opacity-20 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
