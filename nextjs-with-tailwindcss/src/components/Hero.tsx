import type { NextComponentType } from 'next'

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
								<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
								</svg>
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
