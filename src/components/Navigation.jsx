import logo_full from '/logo_full.png'
import logo_short from '/logo_short.png'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from '../util/useMediaQuery'

export default function Nav() {
    const [toggle, setToggled] = useState(false)
    const xl = useMediaQuery('(min-width: 1280px)')

    //return the navbar
    return (
        <div className="bg-light rounded-xl shadow-md m-2 md:m-4 lg:m-10">
            <nav className="relative mx-16 mb-24 flex justify-between items-center py-12 font-medium">

                {xl ? (<div>
                    <span className='text-5xl font-black text-accent'>Save a Life<br/>Initiative</span>
                </div>) : (<div>
                    <span className='text-6xl font-black text-accent'>SaL</span>
                </div>)}
                
                
                {xl && (
                    <div className='flex gap-12 text-lg'>
                        <a href="/">
                            Home
                        </a>
                        <a href="/about">
                            About
                        </a>
                        <a href="/outreach">
                            Outreach
                        </a>
                        <a href="/app">
                            IAP CPR App
                        </a>
                        <a href="/validation">
                            Validation
                        </a>
                        <a href="/team">
                            The Team
                        </a>
                        <a href="/contact">
                            Contact Us
                        </a>
                    </div>
                )}

                {!xl && (
                    <div className='space-y-2 cursor-pointer z-50' onClick={() => setToggled(prevToggle => !prevToggle)}>
                        <motion.span className='block h-0.5 w-8 bg-dark'></motion.span>
                        <motion.span className='block h-0.5 w-6 bg-dark'></motion.span>
                        <motion.span className='block h-0.5 w-4 bg-dark'></motion.span>
                    </div>  
                )}

                {toggle && !xl && (
                    <motion.div
                        animate={{opacity: 0.9, x: 0}}
                        initial={{opacity: 0, x: 25}}
                    className='fixed flex bg-lighter bottom-0 left-0 w-full h-screen items-center justify-center'>
                        <div className='flex flex-col gap-16 text-lg'>
                            <a href="/">
                                Home
                            </a>
                            <a href="/about">
                                About
                            </a>
                            <a href="/outreach">
                                Outreach
                            </a>
                            <a href="/app">
                                IAP CPR App
                            </a>
                            <a href="/validation">
                                Validation
                            </a>
                            <a href="/team">
                                The Team
                            </a>
                            <a href="/contact">
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </nav>
        </div>
    )
}