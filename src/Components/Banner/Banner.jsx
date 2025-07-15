/* eslint-disable no-unused-vars */
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../../assets/hero.png";
import BlurText from "../BlurText/BlurText";
import ShinyText from "../ShinyText/ShinyText";
import RotatingText from "../RotatingText/RotatingText";

const slideDownVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export default function Banner() {
  document.title = "Home";
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="overflow-hidden">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto overflow-hidden relative z-0">
        {/* Left */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4 md:space-y-6 mt-28 md:mt-0 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideDownVariants}
        >
          <BlurText
            text="Emon Hossain"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-7xl font-bold text-base-content"
          />
          <ShinyText
            text="Passionate MERN Stack Developer crafting modern, responsive, and
            user-friendly web applications"
            disabled={false}
            speed={3}
            className="text-base-content/80 md:text-lg"
          />

          <RotatingText
            texts={[
              "MERN Stack Developer",
              "JS Developer",
              "React.js Developer",
            ]}
            mainClassName="text-2xl md:text-4xl font-bold text-[#E63946]"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.facebook.com/n.bi.ta.554015"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b5998] text-2xl hover:scale-110 transition"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://x.com/IstiakAhme13930"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00acee] text-2xl hover:scale-110 transition"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://github.com/islamemon59"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl hover:scale-110 transition"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1d721rxVs0D3VK27lAbAotWuqsZjgTX5k/view?usp=sharing"
            download
            className="inline-block mt-4 bg-[#E63946] text-white px-6 py-2 rounded font-semibold hover:bg-black transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideDownVariants}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#E63946] shadow-lg">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
