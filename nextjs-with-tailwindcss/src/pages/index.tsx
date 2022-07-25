import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedResort from '../components/FeaturedResort'
import Resorts from '../components/Resorts'
import FormSearch from '../components/FormSearch'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Início</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="h-auto w-auto bg-gray-50 text-gray-600">
      <Header />
      <Hero />
      <FeaturedResort />
      <Resorts />
      <FormSearch />
      <Footer />
    </div>
    </>
  )
}

export default Home
