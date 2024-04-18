import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { Key } from 'react'
import { IconType } from 'react-icons/lib'
function generateUniqueId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id = ''
  for (let i = 0; i < 10; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}
//Menu Items
export type MenuItems = {
  id: Key
  route: string
  title: string | null | undefined
  tag: string | null | undefined
}
export type FooterItems = {
  address: AddressType
  menu: FooterLinks[]
}
export type FooterLinks = {
  title: string
  footerLinks: MenuItems[]
}
export type AddressType = {
  addressLine1: string
  addressLine2: string
  details: string
}
export const menuItems: MenuItems[] = [
  { id: generateUniqueId(), title: 'Storie', route: '/storie', tag: null },
  { id: generateUniqueId(), title: 'Loev', route: '/loev', tag: null },
  { id: generateUniqueId(), title: 'One', route: '/one', tag: null },
  {
    id: generateUniqueId(),
    title: 'Superbike',
    route: '/superbike',
    tag: 'new',
  },
  { id: generateUniqueId(), title: 'Book Now', route: '/book-Now', tag: null },
  {
    id: generateUniqueId(),
    title: 'Book a Test Ride',
    route: '/test-Ride',
    tag: null,
  },
  {
    id: generateUniqueId(),
    title: 'Become a Dealer',
    route: '/become-dealer',
    tag: null,
  },
]
export const productData = {
  id: 1, // Unique identifier
  title: 'Storie',
  image: '/bike-variants/green-variant.png',
  description: 'A powerful and stylish electric bike...', // Add product description
  bookingAmount: 2500, // Booking amount
  price: 117357, // Price (incl. FAME II Subsidy)
  colors: [
    {
      title: 'Sparkling Green',
      color: '#A0CABB',
      image: '/bike-variants/green-variant.png',
    },
    {
      title: 'Sparkling White',
      color: '#FFFFFF',
      image: '/bike-variants/white-variant.png',
    },
  ], // Available color options
}

export const footerItems: FooterItems = {
  address: {
    addressLine1:
      'Kasra No 351, 80 Feet Road, Vinayak City Guru Marg, Sirsi Road Neemera, Bindayaka',
    addressLine2: 'Jaipur, Rajasthan, 302041',
    details: 'CIN: U29100RJ2017PTC059452',
  },
  menu: [
    {
      title: 'Model',
      footerLinks: [
        {
          id: generateUniqueId(),
          title: 'Storie',
          route: '/storie',
          tag: null,
        },
        { id: generateUniqueId(), title: 'Loev', route: '/loev', tag: null },
        { id: generateUniqueId(), title: 'One', route: '/one', tag: null },
      ],
    },
    {
      title: 'Company',
      footerLinks: [
        { id: generateUniqueId(), title: 'About', route: '/about', tag: null },
        { id: generateUniqueId(), title: 'Blog', route: '/blog', tag: null },
      ],
    },
    {
      title: 'Quick links',
      footerLinks: [
        {
          id: generateUniqueId(),
          title: 'Become a Dealer',
          route: '/become-dealer',
          tag: null,
        },
        {
          id: generateUniqueId(),
          title: 'Book a test ride',
          route: '/test-ride',
          tag: null,
        },
        {
          id: generateUniqueId(),
          title: 'Locate a Dealer',
          route: '/locate-dealer',
          tag: null,
        },
        {
          id: generateUniqueId(),
          title: 'Book now',
          route: '/book-now',
          tag: null,
        },
        {
          id: generateUniqueId(),
          title: 'Emagine',
          route: '/emagine',
          tag: null,
        },
        {
          id: generateUniqueId(),
          title: 'Contact',
          route: '/contact',
          tag: null,
        },
      ],
    },
  ],
}

export const socialLinks = [
  {
    id: generateUniqueId(),
    link: '#', // Replace with your actual Instagram link
    icon: FaInstagram as IconType, // Use `as const` for type safety
  },
  {
    id: generateUniqueId(),
    link: '#', // Replace with your actual Facebook link
    icon: FaFacebookF as IconType,
  },
  {
    id: generateUniqueId(),
    link: '#', // Replace with your actual LinkedIn link
    icon: FaLinkedinIn as IconType,
  },
  {
    id: generateUniqueId(),
    link: '#', // Replace with your actual Twitter link
    icon: FaTwitter as IconType,
  },
  {
    id: generateUniqueId(),
    link: '#', // Replace with your actual YouTube link
    icon: FaYoutube as IconType,
  },
] as const

export const swatchData = [
  '#A0CABB',
  '#707485',
  '#233A78',
  '#93D4DE',
  '#C5DBF4',
  '#B42025',
  '#FFFFFF',
  '#F5D266',
]
