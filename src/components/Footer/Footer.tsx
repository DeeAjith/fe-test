import React from 'react'
import Link from 'next/link'
import { FooterItems, socialLinks } from '@/constants'
import style from './footer.module.scss'
import Newsletter from '../Newsletter'
const Footer = ({ footerItems }: { footerItems: FooterItems }) => {
  return (
    <footer className="block bg-black px-5 py-10 lg:pt-16 lg:pb-11 w-full">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-8 lg:gap-0 text-center text-white">
          <h1 className="text-left">
            Stay Informed <br />
            About Battre
          </h1>
          <div className="flex flex-col items-start gap-y-3">
            <Newsletter />
          </div>
        </div>
        <hr className="border-fe-gray-1 my-10 lg:mt-11 lg:mb-9 w-full" />
        <div className="flex lg:flex-row flex-col justify-between items-start">
          {/* Address Section */}
          <div className="flex flex-col gap-4 mb-10 lg:mb-0 w-full max-w-80 text-[14px] text-white lg:max-w-56lg:tracking-[0.25px] address">
            <p>{footerItems.address.addressLine1}</p>
            <p>{footerItems.address.addressLine2}</p>
            <p>{footerItems.address.details}</p>
          </div>

          {/* Footer Menu Section */}
          <div className={`${style.footerMenu} flex flex-wrap lg:flex-nowrap`}>
            {footerItems.menu.map((section) => (
              <ul
                key={section.title}
                className="flex-grow basis-1/2 last:basis-full last:flex last:flex-col lg:last:mt-0 last:mt-9"
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
        <hr className="border-fe-gray-1 mt-10 lg:mt-24 mb-8 lg:mb-8 w-full" />
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center w-full text-fe-gray-2 text-xs lg:text-sm">
          <Link href={'#'}>
            <span>© 2023 Batt:RE. All rights reserved</span>
          </Link>
          <span className="flex gap-6 lg:my-0 mt-4 mb-6">
            <Link href={'#'}>
              <span>PRIVACY POLICY</span>
            </Link>
            <Link href={'#'}>
              <span>TERMS & CONDITIONS</span>
            </Link>
          </span>
          <div className="flex items-center gap-5 socialLinks">
            <div className="flex items-center gap-5 socialLinks">
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
