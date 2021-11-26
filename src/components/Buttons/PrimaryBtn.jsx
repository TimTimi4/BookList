import styled from 'styled-components'

const StyledButton = styled.button`
  width: 312px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryBtn};
  border-radius: 12px;
  color: #fff;
  font-size: ${({ theme }) => theme.sizes.fonts.button};
  cursor: pointer;
  border: 0;
  display: block;
`

const PrimaryBtn = ({ children, className, type, onClick, disabled }) => (
  <StyledButton className={className} type={type || 'button'} onClick={onClick} disabled={disabled}>
    { children }
  </StyledButton>
)

export default PrimaryBtn
