import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
// Types
import { CartItemType } from '../Ecommerce/Ecommerce'
// Styles
import { Wrapper, Image } from './Item.styles'
//components

type Props = {
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
  clickable: boolean
  _id: number
}

const Item: React.FC<Props> = ({ item, handleAddToCart, clickable, _id }) => (
  <Wrapper key={_id}>
    {clickable ? (
      <Link to={`/${_id}`}>
        <Image src={item.productPic} alt={item.name} />
      </Link>
    ) : (
      <Image src={item.productPic} alt={item.name} />
    )}

    <div>
      <p>{item.name}</p>
      {/* <p>{item.description}</p> */}
      <h3>${item.price}</h3>
    </div>
    <Button
      style={{ backgroundColor: '#265499', color: '#FFFFFF' }}
      onClick={() => handleAddToCart(item)}
    >
      Add to cart
    </Button>
  </Wrapper>
)

export default Item
