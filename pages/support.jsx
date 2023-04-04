import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout'
import Button from '../components/Button'
import useSWR from 'swr'
import Image from 'next/image';

export default function Support() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fetcher = (url) =>
  fetch(url).then((res) => res.json())

  const { data: products, mutate } = useSWR('/api/products', fetcher)
  console.log(products)

  return (
    <div>
      <Head>
        <title>Live Fickle | Support</title>
        <meta name="description" content="Be Fickle. Be Flawed. Be You." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="container mx-auto my-32">
          <h1 className="text-6xl font-semibold text-center text-white uppercase">
            Support Us
          </h1>
          <p className="px-64 pt-12 pb-4 font-bold text-center">By purchasing Fickle merch, you&apos;ll not only be sporting some stylish picks, you&apos;ll also be supporting important causes such as mental health research, access to therapy and support services, and raising awareness about the importance of mental health.</p>
          <p className="px-64 pb-12 font-bold text-center">Treat yourself to some new merchandise and feel good about supporting a cause that&apos;s close to your heart. Plus, you&apos;ll be the envy of all your friends with your stylish and socially conscious choices. Don&apos;t miss out – grab your merch now.</p>
          <div className="flex flex-wrap items-center justify-around mt-24">
            <h2 className="mb-0 text-4xl font-bold uppercase md:">Be Lovely</h2>
            {/* <Button color="white" link="/support#shop">
              Shop Now
            </Button> */}
            <Button color="yellow" link="/support#donate">
              Donate
            </Button>
          </div>
        </section>
        <section className="mx-auto bg-yellow-300">
        <div className="bg-yellow">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <a key={product.node.id} href={`https://be-fickle-shop.myshopify.com/products/${product.node.handle}`} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.node.images.edges[0].node.originalSrc}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.node.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.node.priceRange.minVariantPrice.amount}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
              
        </section>
      </MainLayout>
    </div>
  )
}
