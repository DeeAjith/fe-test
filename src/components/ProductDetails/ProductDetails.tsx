'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import City from '../City'
import { CheckMark_Icon } from '@/assets/CustomIcons/Icons'
import Swatch from '../Swatch'
import { Product, Color } from '@/constants'
import { formattedPrice } from '@/utils/formattedPrice'
import { gsap } from 'gsap'

interface ProductDetailsProps {
  product: Product
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const {
    title,
    image,
    description,
    colors,
    initialColor,
    initialSelectionIndex,
    bookingAmount,
    price,
    currency,
  } = product
  const [selectedColor, setSelectedColor] = useState<Color>(
    colors[initialSelectionIndex]
  )

  useEffect(() => {
    // Set initial selected color on component mount
    setSelectedColor(colors[initialSelectionIndex])
  }, [initialSelectionIndex, colors])
  useEffect(() => {
    gsap.fromTo(
      '.productLeft',
      {
        opacity: 0,
        x: -50, // Move from left to right
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      }
    )

    gsap.fromTo(
      '.productRight',
      {
        opacity: 0,
        x: 50, // Move from right to left
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6, // Slightly longer delay for .productRight
      }
    )

    gsap.fromTo(
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'svg'], // Target all heading tags
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6, // Slightly longer delay for .productRight
      }
    )
  }, [])

  // Run the animation only once on component mount

  const handleSwatchClick = (colorData: Color) => {
    setSelectedColor(colorData)
  }

  return (
    <div className="relative flex lg:flex-row flex-col xl:mx-auto w-full xl:max-w-screen-xl productDetails">
      <LeftSection
        title={title}
        selectedColor={selectedColor}
        bookingAmount={bookingAmount}
        price={price}
        currency={currency}
      />
      <RightSection
        selectedColor={selectedColor}
        handleSwatchClick={handleSwatchClick}
        colors={colors}
        description={description}
      />
    </div>
  )
}

interface LeftSectionProps {
  title: string
  selectedColor: Color
  bookingAmount: number
  price: number
  currency: string
}

const LeftSection: React.FC<LeftSectionProps> = ({
  title,
  selectedColor,
  bookingAmount,
  price,
  currency,
}) => (
  <div className="flex flex-col bg-white p-5 pt-10 xl:pt-16 xl:pb-20 md:w-full xl:w-2/5 productLeft xl:ps-5 xl:pe-16">
    <TitleSection
      title={title}
      selectedColor={selectedColor}
      currency={currency}
    />
    <hr className="border-fe-gray-5 mt-5 lg:mt-8 mb-9 lg:mb-20 w-full" />
    <MediaSection selectedColor={selectedColor} />
    <hr className="lg:border-fe-gray-5 mt-5 lg:mt-8 mb-5 lg:mb-8 border-transparent w-full" />
    <TextDetails
      currency={currency}
      price={price}
      bookingAmount={bookingAmount}
    />
  </div>
)

interface TitleSectionProps {
  title: string
  selectedColor: Color
  currency: string
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  selectedColor,
}) => (
  <div className="flex justify-between w-full productTitleBar">
    <h6>{title}</h6>
    <span className="flex items-center gap-5 productSwatch">
      <Swatch color={selectedColor.color} type="color" />
      <span className="text-xs lg:text-sm leading-5 tracking-[0.25px]">
        {selectedColor ? selectedColor.title : 'No Color Selected'}
      </span>
    </span>
  </div>
)

interface MediaSectionProps {
  selectedColor: Color
}

const MediaSection: React.FC<MediaSectionProps> = ({ selectedColor }) => (
  <div className="productMedia">
    <div className="relative flex justify-center w-full productImage">
      <Image
        width={260}
        height={183}
        className="relative mx-11 lg:mx-16 w-full h-full"
        src={selectedColor.image ? selectedColor.image : ''}
        alt="Product Image"
      />
    </div>
  </div>
)
interface TextDetailsProps {
  bookingAmount: number
  price: number
  currency: string
}
const TextDetails: React.FC<TextDetailsProps> = ({
  bookingAmount,
  price,
  currency,
}) => {
  // Convert the price string to a number and format it using toLocaleString()

  return (
    <div className="flex justify-between gap-3">
      <div className="block">
        <p className="mb-7 lg:mb-5 text-[10px]">Booking Amount</p>
        <h4>{formattedPrice(bookingAmount)}</h4>
      </div>
      <div className="flex gap-2 lg:gap-5">
        <p className="flex flex-col text-[10px]">
          <span className="text-fe-gray-text-1">*Ex-showroom price in</span>
          <span className="text-fe-gray-text-2">(incl. FAME II Subsidy)</span>
          <span className="mt-3 lg:mt-3 text-[22px] leading-7 tracking-[0.25px]">
            {formattedPrice(price, currency)}
          </span>
        </p>
        <City />
      </div>
    </div>
  )
}

interface RightSectionProps {
  selectedColor: Color
  handleSwatchClick: (colorData: Color) => void
  colors: Color[]
  description: string
}

const RightSection: React.FC<RightSectionProps> = ({
  selectedColor,
  handleSwatchClick,
  colors,
  description,
}) => (
  <div className="flex flex-col bg-fe-bg-offwhite p-5 pt-10 xl:pt-16 xl:pb-20 md:w-full xl:w-3/5 productRight xl:ps-16 xl:pe-5">
    <p className="flex gap-10 font-semibold text-fe-gray-text-3 text-xs uppercase tracking-[0.5px] overflow-y-scroll-scroll md:overflow-y-auto">
      <span className="text-black active">01 Select model</span>
      <span className="text-black active">02 Select COLOR</span>
      <span>03 Your Details and preferred location</span>
    </p>
    <h6 className="pt-10 pb-8 lg:w-[6ch]">Choose a colour</h6>
    <OptionsBox
      selectedColor={selectedColor}
      handleSwatchClick={handleSwatchClick}
      colors={colors}
    />
    <DescriptionSection description={description} />
  </div>
)

interface OptionsBoxProps {
  selectedColor: Color
  handleSwatchClick: (colorData: Color) => void
  colors: Color[]
}

const OptionsBox: React.FC<OptionsBoxProps> = ({
  selectedColor,
  handleSwatchClick,
  colors,
}) => (
  <SwatchOptions
    selectedColor={selectedColor}
    handleSwatchClick={handleSwatchClick}
    colors={colors}
  />
)

interface SwatchOptionsProps {
  selectedColor: Color
  handleSwatchClick: (colorData: Color) => void
  colors: Color[]
}

const SwatchOptions: React.FC<SwatchOptionsProps> = ({
  selectedColor,
  handleSwatchClick,
  colors,
}) => (
  <div className="flex flex-col gap-8 bg-white lg:px-16 p-8 me-0 lg:me-16">
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
          src={selectedColor.image}
          width={112}
          height={85}
        />
      </div>
    </div>
    <div className="flex flex-wrap gap-3 lg:gap-y-5 lg:gap-8">
      {colors.map((colorData) => (
        <SwatchItem
          key={colorData.color}
          colorData={colorData}
          handleSwatchClick={handleSwatchClick}
          selectedColor={selectedColor}
        />
      ))}
    </div>
  </div>
)

interface SwatchItemProps {
  colorData: Color
  handleSwatchClick: (colorData: Color) => void
  selectedColor: any
}

const SwatchItem: React.FC<SwatchItemProps> = ({
  colorData,
  handleSwatchClick,
  selectedColor,
}) => (
  <Swatch
    type="color"
    color={colorData.color}
    onClick={() => handleSwatchClick(colorData)}
    isActive={selectedColor.color === colorData.color} // Pass isActive based on selectedColor
  />
)

interface DescriptionSectionProps {
  description: string
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
}) => (
  <div className="flex flex-col gap-3 bg-white mt-4 lg:px-16 p-8 me-0 lg:me-16">
    <h6 className="leading-normal">Description</h6>
    {description}
  </div>
)

export default ProductDetails
