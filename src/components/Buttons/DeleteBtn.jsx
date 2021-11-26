import styled from 'styled-components'
import Trash from '../Icons/Trash'

const StyledButton = styled.button`
  width: 312px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.deleteBtn};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.sizes.fonts.button};
  cursor: pointer;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const StyledTrash = styled(Trash)`
position: absolute;
top: 10px;
left: 10px;
color: ${({ theme }) => theme.colors.unactive};
`

const DeleteBtn = ({ children, className, type = 'button', onClick }) => (
  <StyledButton className={className} type={type} onClick={onClick}>
    <StyledTrash />
    { children }
  </StyledButton>
)

export default DeleteBtn
