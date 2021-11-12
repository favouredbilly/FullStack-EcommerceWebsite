import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const useProductFetch = (id: string) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { _id } = useParams()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(false)
        const product =
          await // await fetch(`http://localhost:3000/api/v1/products/${productId}`)
          (await fetch(`http://localhost:3000/api/v1/products/${_id}`)).json()

        //Get user
        setState({
          ...product,
        })
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }

    fetchProduct()
  }, [_id])
  return { state, loading, error }
}
