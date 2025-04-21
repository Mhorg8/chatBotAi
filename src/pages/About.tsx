import Header from "../components/Header";
import { motion } from "framer-motion";

const AboutPage = () => {
  const animation = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="font-roboto-bold overflow-hidden ">
      <Header />
      <div className="w-full h-[calc(100dvh-73px)] bg-zinc-900 flex flex-col items-start justify-center">
        <motion.div
          className="container mx-auto"
          variants={animation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5  , type: "spring", bounce: 0.2 , stiffness: 100 }}
        >
          <h1 className="text-white font-extrabold text-7xl">ABOUT PROJECT</h1>
          <p className="text-white text-lg">
            This project was created for Azad University, but you can also use
            it for daily use.{" "}
          </p>
          <p className="mt-10 mb-5 text-white text-4xl">Technologies Used</p>
          <ul className="">
            <li className="text-white flex items-center gap-2">
              <h3 className="text-xl font-semibold">TypeScript : </h3>
              <p>For the Front-end</p>
            </li>
            <li className="text-white flex items-center gap-2">
              <h3 className="text-xl font-semibold">ReactJs : </h3>
              <p>For the Front-end framework</p>
            </li>
            <li className="text-white flex items-center gap-2">
              <h3 className="text-xl font-semibold">NodeJs :</h3>
              <p>For the Back-end</p>
            </li>
            <li className="text-white flex items-center gap-2">
              <h3 className="text-xl font-semibold">ExpressServer : </h3>
              <p>For the local server</p>
            </li>
            <li className="text-white flex items-center gap-2">
              <h3 className="text-xl font-semibold">PostgresSql : </h3>
              <p>For the Database</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
