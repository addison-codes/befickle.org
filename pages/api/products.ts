import { getAllProducts } from '../../utils/Shopify'

export default async function handler() {
  const products = await getAllProducts()
  
  return products
  
}
