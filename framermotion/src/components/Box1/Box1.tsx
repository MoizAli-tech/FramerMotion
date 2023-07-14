import React, { useState } from 'react'
import { motion } from "framer-motion"

const Box1 = () => {
    let [isAnimating, setIsAnimating] = useState<boolean>(false);
    return (
        <div className='box-container'>
            <motion.div
                className="box"
                animate={{
                    x: isAnimating ? "200%" : "0%",
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0
                }}

                initial={{
                    opacity: 0.5,
                    x: 100,

                }}

                transition={{
                    type: "spring",
                    stiffness: 80

                }}

                onClick={() => setIsAnimating(!isAnimating)}
            >
                ClicK Me
            </motion.div>
        </div>
    )
}

export default Box1;