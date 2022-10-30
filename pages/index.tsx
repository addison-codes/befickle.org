import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Hero from '../components/Hero'
import MainLayout from '../components/layout/MainLayout'
import OffsetText from '../components/OffsetText'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Be Fickle</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout landing>
        <Hero image='hero-concert.png' cover='glitch-cover.png' home />
        <section className="w-1/2 mx-auto mt-14 lg:mt-36 lg:-mb-24 -mb-14">
          <Image alt='Be Fickle Glitch Portrait' src={'/be-fickle-portrait.png'}  height='1270' width='800' />
        </section>
        <section id='about' className="pb-32 bg-white pt-44">
          <OffsetText title='Be Effervescent'>
          Be Fickle provides a platform for young people to voice their creative talents. Be Fickle allows struggling artists to create art for a cause and make an income free from the worries of everyday life.
          </OffsetText>
          <div className="flex justify-between mt-24 mb-24">
            <Image alt='Woman with Be Fickle shirt' src={'/woman-bf-shirt.png'} height='541' width='361' />
            <Image alt='Be Fickle Circle Logo' src={'/be-fickle-circle-logo.png'} height='266' width='266' objectFit='contain' />
            <Image alt='Woman with white Be Fickle sweathsirt' src={'/woman-bf-white-sweater.png'} height='541' width='406' />
          </div>
          <OffsetText title='Be Kaleidoscopic' inverse>
          We want to be the first choice for young people seeking an opportunity to express themselves however they see fit. Our mission is to create a foundation of unique opportunities in the arts, music, and entertainment industries that provide educational outcomes for our participants and enhance the          </OffsetText>
        </section>
        <section className="py-24 bg-red">
          <div className="container mx-auto text-black">
          <h1 className="text-3xl font-bold text-center uppercase">Support</h1>
          <p className="py-12 font-bold text-center">Lend your support to our cause by donation or repping our brand</p>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default Home
