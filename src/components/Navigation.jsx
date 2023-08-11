import logo_full from '/logo_full.png'
import logo_short from '/logo_short.png'
import logo_short_alt from '/logo_short_alt.png'
import {motion} from 'framer-motion'
import { useState } from 'react'

export default function Nav() {
    const [toggle, setToggled] = useState(false)

    //return the navbar
    return (
        <nav className="relative mx-16 mb-24 flex justify-between items-center py-12 font-medium md:mx-24 lg:mx-32">
            <div>
                <img src={logo_full} alt="Save a Life Initiative Logo" className="w-64 h-auto"/>
            </div>

            <div className='space-y-2'>
                <span className='block h-0.5 w-8 bg-dark'></span>
                <span className='block h-0.5 w-7 bg-dark'></span>
                <span className='block h-0.5 w-6 bg-dark'></span>
            </div>


            <ul>
                <li className='text-lg font-bold'>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/outreach">Outreach</a>
                </li>
                <li>
                    <a href="/app">IAP CPR App</a>
                </li>
                <li>
                    <a href="/partners">Partnerships</a>
                </li>
                <li>
                    <a href="/validation">Validation</a>
                </li>
                <li>
                    <a href="/team">The Team</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}