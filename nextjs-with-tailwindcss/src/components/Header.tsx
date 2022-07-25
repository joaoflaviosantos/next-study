import type { NextComponentType } from 'next'

const Header: NextComponentType = () => {
  return (
        <div className="container mx-auto px-4 h-24 flex items-center">
            <div className="font-black">
            LOGO
            </div>
            <ul className="flex items-center ml-auto space-x-3">
                <li className="">
                    <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Como reservar</a>
                </li>
                <li className="">
                    <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre nós</a>
                </li>
                <li className="">
                    <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</a>
                </li>
                <li className="">
                    <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contato</a>
                </li>
            </ul>
        </div>
  )
}

export default Header
