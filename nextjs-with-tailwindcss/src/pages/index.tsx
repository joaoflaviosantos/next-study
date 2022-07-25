import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedResort from '../components/FeaturedResort'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Início</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="h-screen w-screen bg-gray-50 text-gray-600">
      <Header />
      <Hero />
      <FeaturedResort />

    </div>
    </>
  )
}

export default Home
