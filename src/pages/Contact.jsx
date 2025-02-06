import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div id="contact" className="w-full py-16 bg-gradient-to-r from-orange-400 to-red-400 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Get in Touch</h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                        Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
                    </p>
                </motion.div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg">
                        <FaPhoneAlt size={40} className="text-yellow-300 mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Phone</h3>
                        <p className="text-lg text-gray-300">+8801863945101</p>
                    </div>

                    <div className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg">
                        <FaEnvelope size={40} className="text-yellow-300 mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Email</h3>
                        <p className="text-lg text-gray-300">mosarfand@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg">
                        <FaFacebook size={40} className="text-yellow-300 mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Facebook</h3>
                        <a
                            href="https://www.facebook.com/mhparvej.khan.5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-gray-300 hover:text-yellow-300"
                        >
                            Visit my Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;