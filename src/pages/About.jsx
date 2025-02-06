import { motion } from "framer-motion";


const About = () => {
    return (
        <div id="about" className="w-full py-16 bg-gray-200 text-black">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About Me</h2>
                    <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-3xl mx-auto">
                        I am passionate about learning and constantly improving my skills. I believe in never giving up, and I always
                        focus on staying up to date with the latest trends and technologies to build better, more efficient applications.
                    </p>
                </motion.div>

                <div className="flex justify-center items-center">
                    <motion.div
                        className="bg-gray-700 p-8 rounded-lg shadow-xl w-full md:w-3/4 lg:w-2/3 xl:w-7/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">My Philosophy</h3>
                        <p className="text-lg text-gray-300">
                            I always strive to improve myself and push my boundaries. Whether it's learning a new programming language, 
                            refining my design skills, or exploring innovative tools, I am committed to staying ahead of the curve and delivering 
                            quality work.
                        </p>
                        <div className="mt-6">
                            <p className="text-xl font-semibold text-yellow-400">Never Give Up!</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
