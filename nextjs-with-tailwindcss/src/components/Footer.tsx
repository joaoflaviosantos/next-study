import type { NextComponentType } from 'next'
import Image from 'next/image'

import instagram from '../../public/images/icon-instagram.png'
import facebook from '../../public/images/icon-facebook.png'

const Footer: NextComponentType = () => {
  return (
        <div className="border-t-2 border-gray-200">
            <div className="container max-w-7xl mx-auto p-4 h-24 flex items-center justify-between">
                <div className="text-gray-400 font-black">
                    <a href="">
                        LOGO
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="">
                        <Image
                        src={instagram}
                        alt="Featured Resort"
                        />
                    </a>
                    <a href="">
                        <Image
                        src={facebook}
                        alt="Featured Resort"
                        />
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Footer
