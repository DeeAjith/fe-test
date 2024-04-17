import React from 'react'

type BurgerMenu_Icon_Props = {
  size?: string
  fillColor?: string
}
type Location_Icon_Props = {
  width: string
  height: string
  fillColor: string
}

export const BurgerMenu_Icon = ({
  size = '16',
  fillColor = 'white',
}: BurgerMenu_Icon_Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="1" width={size} height="2" fill={fillColor} />
      <rect x="8" y="7" width="8" height="2" fill={fillColor} />
      <rect y="13" width={size} height="2" fill={fillColor} />
    </svg>
  )
}

export const Location_Icon = ({
  width = '12',
  height = '15',
  fillColor = 'black',
}: Location_Icon_Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5625 8.4375H4.3875L7.125 5.68125L6.31875 4.875L3.5625 7.6125V8.4375ZM7.74375 5.0625L8.25 4.55625C8.2875 4.51875 8.30625 4.47188 8.30625 4.41563C8.30625 4.35938 8.2875 4.3125 8.25 4.275L7.725 3.75C7.6875 3.7125 7.64063 3.69375 7.58438 3.69375C7.52813 3.69375 7.48125 3.7125 7.44375 3.75L6.9375 4.25625L7.74375 5.0625ZM6 13.5188C7.6625 12.0063 8.89062 10.6344 9.68438 9.40313C10.4781 8.17188 10.875 7.0875 10.875 6.15C10.875 4.675 10.4031 3.46875 9.45938 2.53125C8.51562 1.59375 7.3625 1.125 6 1.125C4.6375 1.125 3.48438 1.59375 2.54063 2.53125C1.59688 3.46875 1.125 4.675 1.125 6.15C1.125 7.0875 1.53125 8.17188 2.34375 9.40313C3.15625 10.6344 4.375 12.0063 6 13.5188ZM6 15C3.9875 13.2875 2.48438 11.6969 1.49063 10.2281C0.496875 8.75938 0 7.4 0 6.15C0 4.275 0.603125 2.78125 1.80938 1.66875C3.01563 0.55625 4.4125 0 6 0C7.5875 0 8.98438 0.55625 10.1906 1.66875C11.3969 2.78125 12 4.275 12 6.15C12 7.4 11.5031 8.75938 10.5094 10.2281C9.51562 11.6969 8.0125 13.2875 6 15Z"
        fill={fillColor}
      />
    </svg>
  )
}
