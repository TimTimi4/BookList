import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
`

// const StyledBookColumn = styled.div`
//   margin: 0px 23.5px 0px 23.5px;
//   flex: 0 1 50%;
//   border: 1px solid blue;
// `

const BookRow = ({ children }) => (
  <Wrapper>
    {/* <StyledBookColumn> */}
    {children}
    {/* </StyledBookColumn> */}
  </Wrapper>
)

export default BookRow
