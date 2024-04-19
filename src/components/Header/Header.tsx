'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { BurgerMenu_Icon } from '@/assets/CustomIcons/Icons'
import { MenuItems } from '@/constants'

type HeaderProps = {
  menuData: any
}

const Header = ({ menuData }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(true) // Use `isOpen` for clarity
  const mobileMenuRef = useRef(null) // Reference for handling scroll

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
    // Optionally, adjust focus for accessibility (see note below)
  }

  // Handle body overflow based on menu state
  useEffect(() => {
    const body = document.body
    body.style.overflow = isOpen ? 'auto' : 'hidden'

    return () => {
      body.style.overflow = 'auto' // Reset on unmount
    }
  }, [isOpen])
  return (
    <>
      <header>
        <nav className="border-gray-200 bg-fe-dark dark:bg-gray-800 px-5 lg:px-6 py-4">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                className="mr-3 w-[76px] h-[21px]"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <div
              className={`${
                isOpen ? 'hidden' : 'block'
              } lg:block w-full fixed top-10 h-auto bg-fe-dark left-0 z-10 lg:relative lg:inset-[unset] lg:bg-transparent`}
              id="mobile-menu"
              ref={mobileMenuRef}
            >
              <ul className="lg:flex flex-shrink justify-between items-center w-full lg:w-auto">
                {menuData.length > 0 ? (
                  <>
                    <div className="flex lg:flex-row flex-col lg:space-x-10 mt-4 lg:mt-0 font-medium">
                      {menuData
                        .slice(0, -3)
                        .map(({ id, title, tag, route }: MenuItems) => (
                          <li key={id} className="">
                            <Link
                              href={route}
                              className="block lg:border-0 lg:hover:bg-gray-400 px-4 lg:px-2 py-2 lg:p-0 rounded-md font-normal text-sm text-white leading-5 pe-3"
                            >
                              <span>{title}</span>
                              {tag && (
                                <span className="relative -top-1 bg-fe-yellow px-1 rounded-sm text-black text-xs leading-3 ms-2">
                                  {tag}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                    </div>
                    <div className="flex lg:flex-row flex-col lg:space-x-10 mt-4 lg:mt-0 mb-4 lg:mb-0 font-medium">
                      {menuData
                        .slice(-3)
                        .map(({ id, title, tag, route }: MenuItems) => (
                          <li key={id} className="">
                            <Link
                              href={route}
                              className="block lg:border-0 lg:hover:bg-gray-400 px-4 lg:px-2 py-2 lg:p-0 rounded-md font-normal text-sm text-white leading-5 pe-3"
                            >
                              <span>{title}</span>
                              {tag && (
                                <span className="relative -top-2 bg-fe-yellow px-1 rounded-sm text-black text-xs leading-3 ms-2">
                                  {tag}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                    </div>
                  </>
                ) : null}
              </ul>
            </div>
            <div className="flex items-center lg:hidden text-white">
              <button
                className="block lg:hidden"
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <BurgerMenu_Icon fill="white" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
