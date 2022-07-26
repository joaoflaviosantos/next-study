import type { NextComponentType } from 'next'
import Image from 'next/image'

import hotelOne from '../../public/images/hotel-1.jpeg'
import hotelTwo from '../../public/images/hotel-2.jpeg'
import hotelThree from '../../public/images/hotel-3.jpeg'
import hotelFour from '../../public/images/hotel-4.jpeg'

const Resorts: NextComponentType = () => {
  return (
        <div className="mt-4">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold">
                        Conheça mais resorts
                    </h3>
                </div>
                <div className="md:grid md:grid-cols-4 md:h-96 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0">
                    <div className="relative md:col-span-2 md:row-span-2 rounded-lg overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 bg-image-shadow h-16 bg-no-repeat bg-cover bg-center z-10" />
                        <div className="absolute bottom-0 pl-4 mb-3 text-white font-bold z-20">
                            Beach Park Resort
                        </div>
                        <img
                        className="w-full h-full object-cover"
                        src={`${hotelOne.src}`}
                        alt="Hotel"
                        />
                    </div>
                    <div className="relative md:col-span-2 rounded-lg overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 bg-image-shadow h-16 bg-no-repeat bg-cover bg-center z-10" />
                        <div className="absolute bottom-0 pl-4 mb-3 text-white font-bold z-20">
                            Salinas do Maragogi Resort
                        </div>
                        <img
                        className="w-full h-full object-cover"
                        src={`${hotelTwo.src}`}
                        alt="Hotel"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 bg-image-shadow h-16 bg-no-repeat bg-cover bg-center z-10" />
                        <div className="absolute bottom-0 pl-4 mb-3 text-white font-bold z-20">
                            Grand Palladium
                        </div>
                        <img
                        className="w-full h-full object-cover"
                        src={`${hotelThree.src}`}
                        alt="Hotel"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 bg-image-shadow h-16 bg-no-repeat bg-cover bg-center z-10" />
                        <div className="absolute bottom-0 pl-4 mb-3 text-white font-bold z-20">
                            Arraia d'Ajuda Eco Resort
                        </div>
                        <img
                        className="w-full h-full object-cover"
                        src={`${hotelFour.src}`}
                        alt="Hotel"
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Resorts
