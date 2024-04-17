import React from 'react'
import Link from 'next/link'
import { FooterItems, socialLinks } from '@/constants'
import style from './footer.module.scss'
import Newsletter from '../Newsletter'
const Footer = ({ footerItems }: { footerItems: FooterItems }) => {
  return (
    <footer className="block w-full bg-black px-5 py-10 lg:pt-16 lg:pb-11">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex flex-col gap-8 text-center text-white items-center lg:justify-between lg:gap-0 lg:flex-row">
          <h1>
            Stay Informed <br />
            About Battre
          </h1>
          <div className="flex flex-col items-start gap-y-3">
            <Newsletter />
          </div>
        </div>
        <hr className="border-fe-gray-1 w-full my-10 lg:mt-11 lg:mb-9" />
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Address Section */}
          <div className="address text-white text-[14px] mb-10 w-full max-w-80 flex gap-4 flex-col lg:mb-0 lg:max-w-56lg:tracking-[0.25px]">
            <p>{footerItems.address.addressLine1}</p>
            <p>{footerItems.address.addressLine2}</p>
            <p>{footerItems.address.details}</p>
          </div>

          {/* Footer Menu Section */}
          <div className={`${style.footerMenu} flex flex-wrap lg:flex-nowrap`}>
            {footerItems.menu.map((section) => (
              <ul
                key={section.title}
                className="flex-grow basis-1/2 last:basis-full last:flex last:mt-9 last:flex-col lg:last:mt-0"
              >
                <li className={`${style.menuTitle} text-fe-gray`}>
                  {section.title}
                </li>
                <div className={style.footerLinks}>
                  {section.footerLinks.map((link) => (
                    <li key={link.id}>
                      <Link href={link.route} className="text-white">
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        </div>
        <hr className="border-fe-gray-1 w-full mt-10 mb-8 lg:mt-24 lg:mb-8" />
        <div className="flex w-full text-xs text-fe-gray-2 flex-col justify-center items-center lg:text-sm lg:flex-row lg:justify-between">
          <Link href={'#'}>
            <span>© 2023 Batt:RE. All rights reserved</span>
          </Link>
          <span className="flex gap-6 mt-4 mb-6 lg:my-0">
            <Link href={'#'}>
              <span>PRIVACY POLICY</span>
            </Link>
            <Link href={'#'}>
              <span>TERMS & CONDITIONS</span>
            </Link>
          </span>
          <div className="socialLinks flex gap-5 items-center">
            <div className="socialLinks flex gap-5 items-center">
              {socialLinks.map((link) => (
                <Link href={link.link} key={link.id}>
                  <span>
                    <link.icon fontSize={20} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
