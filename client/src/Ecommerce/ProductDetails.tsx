import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailHeader from '../ProductDetailHeader'

//Hooks
import { useProductFetch } from '../hooks/useProductFetch'
import Spinner from '../Spinner'
import ProductInfo from '../ProductInfo'

const ProductDetails = () => {
  const { _id } = useParams()
  const { state: product, loading, error } = useProductFetch(_id)
  if (loading) return <Spinner />
  if (error) return <div>Something went wrong....</div>
  console.log(product)
  return (
    <>
      <ProductDetailHeader />
      <ProductInfo product={product} />
    </>
  )
}

export default ProductDetails
