import ProductDetails from '@/components/ProductDetails/ProductDetails'
import React from 'react'
import pdStyle from '@/components/ProductDetails/productdetails.module.scss'
import { productData } from '@/constants' // Import productData

const Storie = () => {
  return (
    <div className={`${pdStyle.root} flex`}>
      <ProductDetails product={productData} />
    </div>
  )
}

export default Storie
