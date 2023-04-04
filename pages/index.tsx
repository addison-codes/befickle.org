import type { NextPage } from 'next'
import Image from "next/image";
import Head from 'next/head'
import Hero from '../components/Hero'
import MainLayout from '../components/layout/MainLayout'
import OffsetText from '../components/OffsetText'
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Live Fickle</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
      </Head>
      <MainLayout landing>
        <Hero image='hero-concert.png' cover='glitch-cover.png' home />
        <div className='absolute h-screen'>
      </div>
        <section className="w-1/2 mx-auto mt-14 lg:mt-36 lg:-mb-24 -mb-14">
          <h2 className='pb-8 text-3xl text-white uppercase'>To Be Fickle Is to be whole, to Live Fickle is to be human.</h2>
          <p className="pb-8 text-white">

It is important to <span className="animate-pulse">recognize</span> that having negative character traits does not make a person "bad," and that everyone has the potential to <span className="animate-pulse">grow</span> and <span className="animate-pulse">change</span> in positive ways. By accepting ourselves and others as complex individuals with a mix of positive and negative traits, we can be more <span className="animate-pulse">understanding</span> and <span className="animate-pulse">compassionate</span> towards ourselves and others, and work towards becoming the <span className="animate-pulse">best</span> versions of ourselves.</p>
          <Image
            alt='Be Fickle Glitch Portrait'
            src={'/man-green-hat-wordmark.jpg'}
            height='1270'
            width='800'
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </section>
        <section id='about' className="pb-32 bg-white pt-44">
          <h1 className='pb-12 mx-auto text-6xl font-bold text-center text-black uppercase'>Defining Fickle</h1>
          <h2 className='container pb-12 mx-auto text-xl text-center text-black px-44'>Together, these words describe a human as being complex and multifaceted, with both positive and negative qualities. They might be prone to making mistakes or being indecisive at times, but also have a lively and energetic personality, and be capable of bringing joy and beauty to the world.</h2>
          <OffsetText title='Flawed'>
          having defects or imperfections; not perfect or without error.
          </OffsetText>
          <OffsetText title='Indecisive' inverse>
          unable to make up one's mind; hesitating or vacillating.
          </OffsetText>
          <OffsetText title='Confused'>
          unable to think clearly; bewildered or perplexed.
          </OffsetText>
          <div className="flex justify-between mt-24 mb-24 bg-black">
            <Image
              alt='Woman with Be Fickle shirt'
              src={'/two-posters.jpg'}
              height='266'
              width='400'
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <Image
              alt='Be Fickle Circle Logo'
              src={'/acronyms.gif'}
              height='266'
              width='266'
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
            <Image
              alt='Woman with white Be Fickle sweathsirt'
              src={'/brickwall-color.jpg'}
              height='541'
              width='406'
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>

          <OffsetText title='Kaleidoscopic' inverse>
          constantly changing or varied in a seemingly random or unpredictable way.
          </OffsetText>
          <OffsetText title='Lovely' >
          having qualities that delight or appeal; beautiful or attractive.
          </OffsetText>
          <OffsetText title='Effervescent' inverse>
          lively and sparkling; characterized by high spirits or enthusiasm.
          </OffsetText>
        </section>
        <section className="py-24 bg-red">
          <div className="container mx-auto text-black">
          <h1 className="text-3xl font-bold text-center uppercase">Support</h1>
          <p className="px-64 pt-12 font-bold text-center">Hey there! Are you looking to make a positive impact on your own mental health and the mental health of others? Our merchandise not only looks great, but a portion of the proceeds from every purchase goes towards supporting mental health initiatives.</p>
          <p className="px-64 pt-4 pb-12 font-bold text-center">By purchasing Fickle merch, you'll not only be sporting some stylish picks, you'll also be supporting important causes such as mental health research, access to therapy and support services, and raising awareness about the importance of mental health.</p>
          <div className="flex flex-wrap items-center justify-around mt-24">
            <h2 className="mb-0 text-4xl font-bold uppercase md:">Be Lovely</h2>
            <Button color="white" link="/support#shop">
              Shop Now
            </Button>
            {/* <Button color="yellow-300" link="/support#donate">
              Donate
            </Button> */}
          </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
}

export default Home
