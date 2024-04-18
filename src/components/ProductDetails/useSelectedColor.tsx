// useSelectedColor.ts
import { useState } from 'react'

const useSelectedColor = (colors: any[]) => {
  const [selectedColor, setSelectedColor] = useState<any | null>({
    color: '',
    title: 'No Color Selected',
    image: '',
  })

  const handleSwatchClick = (colorData: any) => {
    setSelectedColor(colorData)
  }

  return { selectedColor, handleSwatchClick }
}

export default useSelectedColor
