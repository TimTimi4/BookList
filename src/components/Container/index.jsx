import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.container};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;
`

const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)

export default Container
