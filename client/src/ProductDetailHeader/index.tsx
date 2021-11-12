import React from 'react'

import { Link } from 'react-router-dom'

import { Wrapper, Content } from './ProductDetailHeader.styles'

const ProductDetailHeader = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
    </Content>
  </Wrapper>
)

export default ProductDetailHeader
