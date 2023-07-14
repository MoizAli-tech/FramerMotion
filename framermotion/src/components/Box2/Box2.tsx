import { motion } from "framer-motion"

const Box2 = () => {

    return (
        <div className='box-container'>
            <motion.div
                className="box"

                drag
                dragConstraints={{
                    left: 0,
                    right: 20,
                    top: 20,
                    bottom: 20
                }}
                whileHover={{
                    scale: 1.2
                }}

                whileTap={{
                    scale: 0.8
                }}
                animate={{

                }}

                initial={{
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    type: "spring",
                    stiffness: 80

                }}


            >
                I am Draggable
            </motion.div>
        </div>
    )
}

export default Box2;