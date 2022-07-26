import type { NextComponentType } from 'next'
import Image from 'next/image'

import featuredResort from '../../public/images/featured-img.png'

const FeaturedResort: NextComponentType = () => {
  return (
        <div className="mt-4">
            <div className="container max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="lg:pr-10">
                        <div className="text-sm text-gray-400 font-medium">
                            RESORT EM DESTAQUE
                        </div>
                        <div className="text-2xl">
                            Ecoresort Praia do Forte Bahia
                        </div>
                        <div className="text-sm text-gray-400 font-medium mt-2">
                            Hotel qualidade 5 estrelas
                        </div>
                        <div className="text-sm text-gray-500 mt-4">
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="mt-4">
                            <a href="" className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                                Pesquisar resorts
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 text-center lg:ml-auto mb-4 lg:mb-0">
                        <Image
                        src={featuredResort}
                        alt="Featured Resort"
                        className=""
                        width={450}
                        // height={500} automatically provided
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FeaturedResort
