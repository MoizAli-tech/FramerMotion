import { motion } from "framer-motion"

const Box4 = () => {

    return (
        <div className='box-container'>
            <motion.div
                className="box"

                transition={{
                    duration: 5
                }}

                animate={{
                    borderRadius: [40, 100, 200, 100, 40],
                    scale: [1, 1.4, 1],
                    rotate: [0, 360, 0]
                }}


            >
            </motion.div>
        </div>
    )
}

export default Box4;