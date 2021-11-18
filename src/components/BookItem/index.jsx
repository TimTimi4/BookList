import styled from 'styled-components'

const StyledBookItem = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.item};
`

const BookItem = () => (
  <StyledBookItem />
)

export default BookItem
