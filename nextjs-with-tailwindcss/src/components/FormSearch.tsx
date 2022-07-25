import type { NextComponentType } from 'next'

const FormSearch: NextComponentType = () => {
  return (
        <div className="py-20">
            <div className="mt-6 container mx-auto px-4 h-24 flex items-center justify-center">
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
  )
}

export default FormSearch
