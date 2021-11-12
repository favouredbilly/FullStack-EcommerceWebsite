import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import { Image } from './Thumb.styles'
// Types
type Props = {
  image: string
  _id?: number
  clickable: boolean
}

const Thumb: React.FC<Props> = ({ image, _id, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${_id}`}>
        <Image src={image} alt="product-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="product-thumb" />
    )}
  </div>
)

export default Thumb
