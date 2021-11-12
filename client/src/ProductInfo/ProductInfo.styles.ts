import styled from 'styled-components'
export const Wrapper = styled.div`
  background: '#000';
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateProductInfo 1s;
`

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`

export const Text = styled.div`
  width: 50%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .productName {
    margin: 0 0 0 40px;
    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--font-Big);
    }
  }
`
