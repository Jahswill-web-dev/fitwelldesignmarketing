import Image from 'next/image';
import logo from '../public/images/logo.png';
import Link from 'next/link';
import { useState } from 'react';

function Nav() {
    const [navHeight, setNavHeigth] = useState("h-0");

    const handleNav = () => {
        setNavHeigth(navHeight === "h-0" ? "h-40" : "h-0");
    }

    return (
        <nav className="md:flex md:items-center md:justify-between md:max-w-screen-lg md:mt-4 mx-auto">

            {/* mobile */}
            <div>
                <div className="flex p-2 justify-between items-center">
                    {/* logo */}
                    <Image
                        src={logo}
                        alt='fitwelldesignmarketing logo'
                        width={100}
                        height={100}
                    />
                    {/* NavBar */}

                    <i className="fa-solid fa-bars text-3xl md:hidden text-secondary" onClick={handleNav}></i>
                </div>
                {/* navlist */}

                <ul className={`flex flex-col items-center gap-4 transition-all ease-in-out ${navHeight} md:h-0 
                 duration-400 delay-150 overflow-hidden text-secondary text-2xl`}
                    style={{ transition: 'height 0.3s' }} >
                    <Link href="/">Our Services</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">Contact Us</Link>
                </ul>

            </div>
            {/* mobile */}

            {/* desktop */}
            <ul className="hidden md:flex gap-2 text-secondary pr-4 text-xl">
                    <Link href="/">Services</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact </Link>
                </ul>
        </nav>

    );
}

export default Nav;