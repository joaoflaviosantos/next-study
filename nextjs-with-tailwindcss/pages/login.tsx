import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Login: NextPage = () => {
  return (
    <div className="h-screen w-screen justify-center flex items-center bg-gray-100">
      <div className="w-80">
        <h2 className="text-lg font-bold text-center mb-2">Login</h2>

        <div className="bg-white shadow-md rounded-md p-4 space-y-4">
            <div>
              <label
              htmlFor="email"
              className="block text-sm text-gray-800 mb-2"
              >
                E-mail
              </label>
              <input 
              type="email" 
              id="email" 
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              />
            </div>
            
            <div>
              <label 
              htmlFor="password"
              className="block text-sm text-gray-800 mb-1"
              >
                Password
              </label>
              <input 
              type="password" 
              id="password"
              className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
              />
            </div>

            <div className="text-right mr-3">
              <a 
              href=""
              className="text-xs text-gray-500 hover:underline"
              >
                Esqueci minha senha
              </a>
            </div>

            <div>
              <button 
              type="submit"
              className="w-full text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow"
              >
                Login
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
