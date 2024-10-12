// import { TESTIMONIALS } from "../constants"
// import { motion } from "framer-motion"

// const Testimonials = () => {
//   return (
//     <div id="testimonials" className="container mx-auto mt-20 py-16 tracking-tighter">
//         <motion.h2 
//           whileInView={{ opacity: 1, y: 0}}
//           initial={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.5 }}
//           className="mb-20 text-center text-4xl font-bold">
//             What People Say
//         </motion.h2>
//         <motion.div 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1 }}
//           className="mx-auto max-w-3xl">
//             {TESTIMONIALS.map((testimonial, index) => (
//               <div key={index} className="mx-4 mb-8 flex flex-col items-center rounded-xl border border-dotted border-gray-600 p-6 md:flex-row">
//                 <img src={testimonial.image} 
//                     alt={testimonial.name} 
//                     className="mb-4 mr-6 h-16 w-16 rounded-full md:mb-0" />
//                 <div>
//                     <p className="mb-4 italic">"{testimonial.quote}"</p>
//                     <p className="font-bold">{testimonial.name}</p>
//                     <p className="text-gray-400">{testimonial.title}</p>
//                 </div>
//               </div>
//             ))}
//         </motion.div>
//     </div>
//   )
// }

// export default Testimonials


import { TESTIMONIALS } from "../constants";
import { motion, useReducedMotion } from "framer-motion";

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div id="testimonials" className="container mx-auto py-16 tracking-tighter">
      {/* Animated Heading */}
      <motion.h2
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        initial={shouldReduceMotion ? {} : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        What People Say
      </motion.h2>

      {/* Testimonials Grid Container */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {TESTIMONIALS.map((testimonial, index) => {
          const isEven = index % 2 === 0;

          // Define variants based on index
          const testimonialVariants = {
            hidden: {
              opacity: 0,
              x: isEven ? 100 : -100, // Left for even, Right for odd
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            },
          };

          return (
            <motion.div
              key={testimonial.id || index} // Use unique ID if available
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // Allow animations to trigger on each view
              className="flex flex-col items-center rounded-xl border border-dotted border-gray-600 p-6"
              style={{ willChange: "transform, opacity" }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mb-4 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
