import { getAllProducts } from '../../utils/Shopify'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405)
  }
  try {
    const products = await getAllProducts()
    console.log(products)
    return res.status(200).json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Something went wrong.' })
  }
}
