import { motion } from "motion/react"
const About = () => {
    return (
        <div>
            <div className="items-center justify-center text-center flex flex-col mt-9 mb-14">
                <motion.h1
                animate={{color:['#58eb34','#2aeb64','#2aebbe','#2aebeb']}}
                transition={{repeat:Infinity,duration:2,delay:1,ease:"easeInOut"}}
                className="text-4xl font-semibold">Browse by category</motion.h1>
                <p className="mt-5">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
        </div>
    );
};

export default About;