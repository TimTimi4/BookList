import styled from 'styled-components'

const StyledButton = styled.button`
  width: 312px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 12px;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.fonts.button};
  cursor: pointer;
  border: 0;
  margin: 60px auto 0px auto;
  display: block;
`

const AddBookBtn = ({ children, className, type = 'button', onClick }) => (
  <StyledButton className={className} type={type} onClick={onClick}>
    { children }
  </StyledButton>
)

export default AddBookBtn
