import type { NextComponentType } from 'next'

import Search from './icons/Search'

const Hero: NextComponentType = () => {
  return (
        <div className="bg-hero-background h-96 bg-no-repeat bg-cover bg-center">
            <div className="container px-4 mx-auto h-full flex items-center justify-center">
				<div>				
					<div className="text-center">
						<h1 className="text-3xl text-bold text-gray-200 mb-2">
							Onde você quer ir?
						</h1>
						<p className="text-green-100">
							Escolha o estado e cidade para encontrar os melhores resorts.
						</p>
					</div>
					<div className="mt-7">
						<form className="space-x-3">
							<select className="bg-gray-50 pl-4 py-2 border border-gray-300 rounded text-gray-600">
								<option value="">Escolha o estado</option>
							</select>
							<select className="bg-gray-50 pl-4 py-2 border border-gray-300 rounded text-gray-600">
								<option value="">Escolha a cidade</option>
							</select>
							<button className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
								<Search />
								Pesquisar resorts
							</button>
						</form>
					</div>
				</div>
            </div>
        </div>
  )
}

export default Hero
