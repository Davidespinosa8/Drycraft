"use client"

import { CiMenuFries } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import Link from "next/link"
import { Navbar } from '../Navbar'
import { useState } from 'react'
import Image from 'next/image'

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (

        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href="/" className="flex items-center">
                    <Image src="/Drycraft.png" width="100" height="40" alt="Logo inmo" />
                </Link>

                <CiMenuFries className="block text-2xl md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)} />

                <Navbar openMobileMenu={openMobileMenu} />

                <div className="flex items-center gap-2 md:gap-5">
                    <Link href="tel: 2364357363" className="flex items-center gap-4 cursor-pointer">
                        <BsTelephone />
                        <span className="hidden md:block">+542364357363</span>
                    </Link>
                    <Link href="https://wa.me/542364622873" className="px-3 py-2 text-white rounded-lg bg-cyan-500 hover:bg-orange-100" id="contacto">Contacto</Link>
                </div>
            </div>
        </div>
    )
}
