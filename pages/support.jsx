import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout'
import Button from '../components/Button'
import useSWR from 'swr'

export default function support() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: products, mutate } = useSWR('/api/products')
  console.log(products)

  return (
    <div>
      <Head>
        <title>Be Fickle | Support</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="container mx-auto my-32">
          <h1 className="text-6xl font-semibold text-center text-white uppercase">
            Support Us
          </h1>
          <div className="flex flex-wrap items-center justify-around mt-32">
            <h2 className="mb-0 text-4xl font-bold uppercase md:">Be Lovely</h2>
            <Button color="white" link="/support#shop">
              Shop Now
            </Button>
            <Button color="yellow-300" link="/support#donate">
              Donate
            </Button>
          </div>
        </section>
        <section className="container mx-auto bg-yellow-300">
          {products &&
            products.map((product) => <p key={product.id}>{product}</p>)}
        </section>
      </MainLayout>
    </div>
  )
}
