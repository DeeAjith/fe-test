'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BurgerMenu_Icon } from '@/assets/CustomIcons/Icons'
import { MenuItems } from '@/constants'
type HeaderProps = {
  menuData: any
}

const Header = ({ menuData }: HeaderProps) => {
  const [isHidden, setIsHidden] = useState<Boolean>(false)
  const handleMenuToggle = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <header>
        <nav className="bg-fe-dark border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                className="w-[76px] h-[21px] mr-3"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <div
              className={`${
                isHidden ? 'hidden' : 'block'
              } w-full fixed top-10 h-auto bg-fe-dark left-0 z-10 lg:relative lg:inset-[unset] lg:bg-transparent`}
              id="mobile-menu"
            >
              <ul className="justify-between items-center w-full flex-shrink lg:flex lg:w-auto">
                {menuData.length > 0 ? (
                  <>
                    <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
                      {menuData
                        .slice(0, -3)
                        .map(({ id, title, tag, route }: MenuItems) => (
                          <li key={id} className="">
                            <Link
                              href={route}
                              className="block py-2 px-4 pe-3 lg:border-0 lg:p-0 lg:px-2 text-white text-sm font-normal leading-5 rounded-md lg:hover:bg-gray-400"
                            >
                              <span>{title}</span>
                              {tag && (
                                <span className="bg-fe-yellow rounded-sm text-xs text-black leading-3 px-1 -top-1 ms-2 relative">
                                  {tag}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                    </div>
                    <div className="flex flex-col mt-4 mb-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0 lg:mb-0">
                      {menuData
                        .slice(-3)
                        .map(({ id, title, tag, route }: MenuItems) => (
                          <li key={id} className="">
                            <Link
                              href={route}
                              className="block py-2 px-4 pe-3 lg:border-0 lg:p-0 lg:px-2 text-white text-sm font-normal leading-5 rounded-md lg:hover:bg-gray-400"
                            >
                              <span>{title}</span>
                              {tag && (
                                <span className="bg-fe-yellow rounded-sm text-xs text-black leading-3 px-1 -top-2 ms-2 relative">
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
                aria-expanded={isHidden ? 'true' : 'false'}
                onClick={handleMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <BurgerMenu_Icon fillColor="currentColor" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
