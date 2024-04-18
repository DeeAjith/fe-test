import { Location_Icon } from '@/assets/CustomIcons/Icons'
import React from 'react'

type CityProps = {}

const City = () => {
  return (
    <form className="mx-auto max-w-sm">
      <label htmlFor="countries" className="sr-only">
        Select an option
      </label>
      <div className="flex">
        {' '}
        <select
          id="countries"
          className="block bg-none border-none focus-visible:border-none w-auto text-[10px] text-gray-900 appearance-none focus-visible:outline-none"
          defaultValue={'new-delhi'}
        >
          <option value="new-delhi">New Delhi</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="chennai">Chennai</option>
          <option value="goa">Goa</option>
        </select>
        <Location_Icon />
      </div>
    </form>
  )
}

export default City
