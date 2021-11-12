import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  height: 400px;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`
