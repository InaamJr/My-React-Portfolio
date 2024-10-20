import { BiLogoPython } from "react-icons/bi"
import { BiLogoHtml5 } from "react-icons/bi"
import { BiLogoCss3 } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoJavascript } from "react-icons/bi"
import { RiReactjsLine } from "react-icons/ri"
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
  return (
    <section id="technologies" className="container mx-auto py-16 tracking-tighter">
        <div className="border-neutral-800 pb-24">
            <motion.h2 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="my-20 text-center text-4xl font-bold">Technologies
            </motion.h2>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                  variants={iconVariants(2.5)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPython className="text-7xl"/>
                </motion.div>
                <motion.div 
                  variants={iconVariants(3)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoHtml5  className="text-7xl text-orange-500"/>
                </motion.div>
                <motion.div 
                  variants={iconVariants(5)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoCss3 className="text-7xl text-blue-500"/>
                </motion.div>
                <motion.div 
                  variants={iconVariants(2)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoTailwindCss className="text-7xl text-cyan-600"/>
                </motion.div>
                <motion.div 
                  variants={iconVariants(6)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                  variants={iconVariants(4)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
            </motion.div>
        </div>
    </section>
    
  )
}

export default Technologies