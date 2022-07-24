import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import img_background from '../public/img/login-background.jpg'

const Login: NextPage = () => {
  return (
    <>
    <Head>
      <title>Login</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/*  https://redpixelthemes.com/blog/tailwindcss-background-image/ */}
    <div className="h-screen w-screen justify-center flex items-center bg-login-background bg-no-repeat bg-cover bg-center">
      <div className="w-80">
        <div className="bg-white shadow-md rounded-md p-4 space-y-4">
            <h2 className="text-gray-800 text-lg font-bold text-center">Login</h2>
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
    </>
  )
}

export default Login
