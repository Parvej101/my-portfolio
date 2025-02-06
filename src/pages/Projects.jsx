import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            name: "Class Vault",
            description: "ClassVault is a platform to enhance interactions between educational institutions, tutors, and students for efficient skill learning and class management.",
            images: ["/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg"],
            url: "https://class-vault.web.app",
        },
        {
            name: "Clothing Donation",
            description: "Clothing Donation facilitates the collection and distribution of gently used clothes to those in need, fostering community support.",
            images: ["/images/a1.jpg", "/images/a2.jpg", "/images/a3.jpg"],
            url: "https://clothing-donation-4ce32.web.app/",
        },
        {
            name: "Hope Hive",
            description: "Hope Hive connects volunteers and organizations to support community initiatives, promoting kindness and empowerment through collective action",
            images: ["/images/b1.jpg", "/images/b2.jpg", "/images/b3.jpg"],
            url: "https://hope-hive.web.app/",
        },
    ];
    return (
        <div id="projects" className="w-full py-16 bg-white text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">My Projects</h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Here are some of the projects I've worked on. Click on the "Explore" button to learn more about each one.
                    </p>
                </motion.div>

                {/* Projects Cards */}
                <div className="grid grid-cols-1  gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-gray-900 p-6 rounded-lg shadow-xl">
                            {/* Project Images (Swiper Slider) */}
                            <div className="w-full md:w-1/2">
                                <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
                                    {project.images.map((image, idx) => (
                                        <SwiperSlide key={idx}>
                                            <img src={image} alt={`Project ${project.name} screenshot ${idx + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Project Description */}
                            <div className="mt-6 md:mt-0 md:w-1/2 md:ml-10">
                                <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
                                <p className="text-lg text-gray-300 mb-6">{project.description}</p>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-yellow-400 hover:text-yellow-300">
                                    <span className="mr-2">Explore</span>
                                    <FaArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;