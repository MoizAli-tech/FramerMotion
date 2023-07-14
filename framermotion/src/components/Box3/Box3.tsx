import { motion } from "framer-motion"

const Box3 = () => {
    let boxVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        }
    }

    let liVariant = {
        hidden: {
            x: -10,
            opacity: 0,

        },
        visible: {
            x: 0,
            opacity: 1,

        }
    }
    return (
        <div className='box-container'>
            <motion.div
                className="box"
                variants={boxVariant}
                animate="visible"
                initial="hidden"

            >

                {
                    [1, 2, 3].map((item, i): JSX.Element => {
                        return (
                            <motion.li
                                key={i}
                                className="boxItem"
                                variants={liVariant}
                            >

                            </motion.li>
                        )
                    })
                }

            </motion.div>
        </div>
    )
}

export default Box3;