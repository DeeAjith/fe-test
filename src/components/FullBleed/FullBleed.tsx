import React, { ReactNode } from 'react'
import style from './fullbleed.module.scss'

interface FullBleedProps {
  children: ReactNode
  className?: string
}
const fullbleed = {
  width: 'calc(100dvw - 20px)',
}
const FullBleed = ({ className, children }: FullBleedProps) => {
  return (
    <article className="block relative w-full">
      <section
        style={fullbleed}
        className={`relative ms-1/2 left-1/2 translate-x-[-50%] ${
          className ? className : ''
        }`}
      >
        <div className={style.maxWidth}>{children}</div>
      </section>
    </article>
  )
}

export default FullBleed
