import React from 'react'
import {motion, useCycle} from 'framer-motion'

const loadVariant = {
    animationOne: {
        x:[-20,20],
        y:[0,-30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: .5
            },
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: "easeOut"
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: .25,
                ease: "easeOut"
            }
        }
    }
}

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne","animationTwo")
    return (
        <>
            <motion.div className="loader" 
                variants={loadVariant} 
                animate={animation}
            >

            </motion.div> 
            <div onClick={() => cycleAnimation()}>Change Loader</div>
        </>
    )
}

export default Loader
