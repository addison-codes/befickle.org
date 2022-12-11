import Head from "next/head"
import MainLayout from "../components/layout/MainLayout"
import Button from "../components/Button"

const contact = () => {
  return (
    <div>
      <Head>
        <title>Be Fickle | Support</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="container mx-auto my-32">
          <h1 className="text-6xl font-semibold text-center text-white uppercase">Support Us</h1>
          <div className="flex flex-wrap items-center justify-around mt-32">
            <h2 className="mb-0 text-4xl font-bold uppercase md:">Be Lovely</h2>
            <div className="flex flex-wrap items-center gap-12 mx-auto text-xl font-semibold md:gap-40">
              <Button color="red" link="/support#shop">Shop Now</Button>
              <div className="hidden w-1 h-20 bg-white sm:inline"></div>
              <a className="mx-auto" href="tel:616.555.1212">616.555.1212</a>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default contact