'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import City from '../City'
import { CheckMark_Icon } from '@/assets/CustomIcons/Icons'
import Swatch from '../Swatch'
type ProductDetailsProps = {
  product: {
    title: any
    image: any
    description: any
    bookingAmount: any
    price: any
    colors: any
  }
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { title, image, description, bookingAmount, price, colors } = product
  const [selectedColor, setSelectedColor] = useState<any | null>({
    color: '',
    title: 'No Color Selected',
    image: '',
  }) // Default to empty string
  const chosenColorData = colors.find(
    (color: { color: any }) => color.color === selectedColor.color
  )
  const handleSwatchClick = (colorData: any) => {
    setSelectedColor(colorData) // Update selected color on swatch click
  }
  return (
    <div
      className={`relative flex lg:flex-row flex-col xl:mx-auto w-full xl:max-w-screen-xl`}
    >
      <div
        className={`flex flex-col p-5 pt-10 md:w-full xl:w-2/5 xl:pt-16 xl:pb-20 xl:ps-5 xl:pe-16 bg-white`}
      >
        {/* title section */}
        <div className="flex justify-between w-full productTitleBar">
          <h6>{title}</h6>
          <span className="flex items-center gap-5 productSwatch">
            <Swatch color={selectedColor.color} type="color" />
            <span className="text-xs lg:text-sm leading-5 tracking-[0.25px]">
              {selectedColor ? selectedColor.title : 'No Color Selected'}
            </span>
          </span>
        </div>
        <hr className="border-fe-gray-5 mt-5 lg:mt-8 mb-9 lg:mb-20 w-full" />
        {/* Media Section */}
        <div className="productMedia">
          <div className="relative flex justify-center w-full productImage">
            <Image
              width={260}
              height={183}
              className="relative mx-11 lg:mx-16 w-full h-full"
              src={selectedColor.image}
              alt="Product Image"
            />
          </div>
        </div>
        <hr className="lg:border-fe-gray-5 mt-5 lg:mt-8 mb-5 lg:mb-8 border-transparent w-full" />
        {/* product text details */}
        <div className="flex justify-between gap-3">
          <div className="block">
            <p className="mb-7 lg:mb-5 text-[10px]">Booking Amount</p>
            <h4>₹2,500/-</h4>
          </div>
          <div className="flex gap-2 lg:gap-5">
            <p className="flex flex-col text-[10px]">
              <span className="text-fe-gray-text-1">*Ex-showroom price in</span>
              <span className="text-fe-gray-text-2">
                (incl. FAME II Subsidy )
              </span>
              <span className="mt-3 lg:mt-3 text-[22px] leading-7 tracking-[0.25px]">
                ₹ 1,17,357/-
              </span>
            </p>
            <City />
          </div>
        </div>
      </div>
      <div
        className={` flex flex-col md:w-full xl:w-3/5 p-5 pt-10 xl:pt-16 xl:pb-20 xl:ps-16 xl:pe-5 bg-fe-bg-offwhite`}
      >
        <p className="flex gap-10 font-semibold text-fe-gray-text-3 text-xs uppercase tracking-[0.5px] overflow-y-scroll-scroll md:overflow-y-auto">
          <span className="text-black active">01 Select model</span>
          <span className="text-black active">02 Select COLOR</span>
          <span>03 Your Details and preferred location</span>
        </p>
        <h6 className="pt-10 pb-8 lg:w-[6ch]">Choose a colour</h6>
        {/* options box */}

        <div className="flex flex-col gap-8 bg-white lg:px-16 p-8 me-24">
          <div className="flex justify-between gap-4 md:gap-10">
            <div className="flex gap-2">
              <span className="pt-4">
                <CheckMark_Icon />
              </span>
              <span className="flex-col gap-1">
                <h6>Storie</h6>
                <p className="text-xs lg:text-sm leading-5 tracking-[0.25px]">
                  <span>
                    {selectedColor ? selectedColor.title : 'No Color Selected'}
                  </span>
                </p>
              </span>
            </div>
            <div>
              <Image
                alt="Swatch Image"
                src={'/bike-variants/green-variant.png'}
                width={112}
                height={85}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-y-5 lg:gap-8">
            {colors.map((colorData: any) => (
              <Swatch
                key={colorData.color}
                type="color"
                color={colorData.color}
                // isActive={selectedColor === colorData.color} // Pass isActive based on selectedColor
                onClick={() => handleSwatchClick(colorData)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white mt-4 lg:px-16 p-8 me-24">
          <h6 className="leading-normal">Description</h6>
          {description}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
