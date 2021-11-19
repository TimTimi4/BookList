import styled from 'styled-components'

const StyledMainTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.fonts.mainTitle};
  font-weight: 400;
  text-align: center;
`

const MainTitle = ({ children }) => (
  <StyledMainTitle>
    { children }
  </StyledMainTitle>
)

export default MainTitle
