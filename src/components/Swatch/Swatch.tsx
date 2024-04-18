import React from 'react'

interface SwatchProps {
  /** Type of content to display. Can be "text" or "color" */
  type: 'text' | 'color'
  /** Text content to display (if type is "text") */
  text?: string
  /** Color value to display (if type is "color") */
  color?: string
  /** Size of the swatch (default: 32px) */
  size?: number
  /** Flag indicating if the swatch is active */
  isActive?: boolean
  /** Function to be called when the swatch is clicked */
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Swatch: React.FC<SwatchProps> = ({
  type,
  text,
  color,
  size = 23,
  isActive = false,
  onClick,
}) => {
  const styles = {
    swatch: {
      width: size,
      height: size,
      borderRadius: size / 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: onClick ? 'pointer' : 'default', // Set cursor to pointer on click handler
    },
    textSwatch: {
      color: '#fff',
      fontSize: size / 2,
    },
  }

  const classNames = isActive ? 'border-[5px] border-black' : '' // Apply empty string for inactive state

  return (
    <div
      className={`${classNames} ${styles.swatch} outline outline-1 outline-fe-gray-5 transition-all duration-150 ${isActive}`}
      style={{ ...styles.swatch, backgroundColor: color }}
      data-testid="color-swatch"
      onClick={onClick}
    >
      {type === 'text' && <span style={styles.textSwatch}>{text}</span>}
    </div>
  )
}

export default Swatch
