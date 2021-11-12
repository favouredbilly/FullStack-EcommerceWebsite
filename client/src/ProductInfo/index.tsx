import React from 'react'
import Button from '@material-ui/core/Button'
//components
import Thumb from '../Thumb'
import handleAddToCart from '../Ecommerce/Ecommerce'

//styles
import { Wrapper, Content, Text } from './ProductInfo.styles'

const ProductInfo = ({ product }: any) => (
  <Wrapper>
    <Content>
      <Thumb image={product.productPic} clickable={false} />
      <Text>
        <h1 className="productName">{product.name}</h1>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
      </Text>
    </Content>
  </Wrapper>
)
export default ProductInfo
