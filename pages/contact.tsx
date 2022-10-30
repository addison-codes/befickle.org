import Head from "next/head"
import MainLayout from "../components/layout/MainLayout"

const contact = () => {
  return (
    <div>
      <Head>
        <title>Be Fickle | Contact</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="container mx-auto my-32">
          <h1 className="text-6xl font-semibold text-center text-white uppercase">Get In Touch</h1>
          <div className="flex items-center justify-around mt-32">
            <h2 className="text-4xl font-bold uppercase">Be Flawed</h2>
            <div className="flex items-center gap-40 text-xl font-semibold">
              <p className="uppercase">600 Broadway Ave NW<br/>Grand Rapids, MI 49504</p>
              <div className="w-1 h-20 bg-white"></div>
              <a href="tel:616.555.1212">616.555.1212</a>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default contact