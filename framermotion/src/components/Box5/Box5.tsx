import { motion, useAnimation } from "framer-motion"

const Box5 = () => {
    const control = useAnimation();

    return (
        <>
            <button onClick={() => control.start({
                x: 0
            })}>Move Left</button>
            <button onClick={() => control.start({

                x: "50vw"
            })}>Move Right</button>
            <button onClick={() => control.start({
                borderRadius: "50%"
            })}>Circle</button>
            <button onClick={() => control.start({
                borderRadius: 0
            })}>Square</button>
            <button onClick={() => control.stop()}>Stop</button>

            <div className='box-container'>


                <motion.div
                    className="box"

                    animate={control}
                    transition={{
                        duration: 3
                    }}

                >
                </motion.div>
            </div>
        </>

    )
}

export default Box5;