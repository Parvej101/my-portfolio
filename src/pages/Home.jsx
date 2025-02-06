import Navbar from "../components/Navbar";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div id="home" className="md:w-[90%] mx-auto">
            <div><Navbar></Navbar></div>
            <div className=""><Banner></Banner></div>
            <div><About></About></div>
            <div><Skills></Skills></div>
            <div><Projects></Projects></div>
            <div><Contact></Contact></div>
            
        </div>
    );
};

export default Home;