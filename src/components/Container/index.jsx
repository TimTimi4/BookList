import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.container};
  position: relative;
  margin: 130px auto;
  padding: 0px 20px 0px 20px;
`

const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)

export default Container
