import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills" className="w-full bg-gradient-to-r from-orange-400 py-16 to-red-400 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">My Skills</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        These are the technologies I work with. I am constantly improving my knowledge and skills in these areas.
                    </p>
                </motion.div>

                {/* Skills Cards */}
                <div className="flex overflow-x-hidden">
                    <motion.div
                        className="flex space-x-8 animate-marquee"
                        initial={{ x: '30%' }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {/* HTML5 */}
                        <motion.div
                            className="bg-red-500 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaHtml5 size={40} />
                            <p className="mt-2 text-lg">HTML5</p>
                        </motion.div>

                        {/* CSS3 */}
                        <motion.div
                            className="bg-blue-600 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaCss3Alt size={40} />
                            <p className="mt-2 text-lg">CSS3</p>
                        </motion.div>

                        {/* Tailwind */}
                        <motion.div
                            className="bg-cyan-400 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiTailwindcss size={40} />
                            <p className="mt-2 text-lg">Tailwind CSS</p>
                        </motion.div>

                        {/* JavaScript */}
                        <motion.div
                            className="bg-yellow-500 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaJs size={40} />
                            <p className="mt-2 text-lg">JavaScript</p>
                        </motion.div>

                        {/* React */}
                        <motion.div
                            className="bg-blue-500 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaReact size={40} />
                            <p className="mt-2 text-lg">React</p>
                        </motion.div>

                        {/* MongoDB */}
                        <motion.div
                            className="bg-green-600 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiMongodb size={40} />
                            <p className="mt-2 text-lg">MongoDB</p>
                        </motion.div>

                        {/* Node.js */}
                        <motion.div
                            className="bg-green-700 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaNodeJs size={40} />
                            <p className="mt-2 text-lg">Node.js</p>
                        </motion.div>

                        {/* Firebase */}
                        <motion.div
                            className="bg-yellow-500 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiFirebase size={40} />
                            <p className="mt-2 text-lg">Firebase</p>
                        </motion.div>

                        {/* Express */}
                        <motion.div
                            className="bg-gray-700 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SiExpress size={40} />
                            <p className="mt-2 text-lg">Express</p>
                        </motion.div>

                        {/* GitHub */}
                        <motion.div
                            className="bg-gray-800 p-6 rounded-lg shadow-xl w-40 flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaGithub size={40} />
                            <p className="mt-2 text-lg">GitHub</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skills;