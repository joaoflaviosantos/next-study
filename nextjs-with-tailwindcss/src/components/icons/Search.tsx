import type { NextComponentType } from 'next'
import Image from 'next/image'

import searchIcon from '../../../public/icons/search.svg'

const Search: NextComponentType = () => {
  return (
        <Image
        src={searchIcon}
        alt="Search icon"
        className=""
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        />
  )
}

export default Search
