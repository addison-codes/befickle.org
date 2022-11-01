const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_AT

async function ShopifyData(query) {
  const URL = `${domain}/api/2021-07/graphql.json`

  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAllProducts() {
  const query = `
  {
    products(first: 25) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`

  const response = await ShopifyData(query)

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : []

  return allProducts
}
