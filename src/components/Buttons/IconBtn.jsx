import styled from 'styled-components'

const StyledIcon = styled.button`
  width: ${({ theme }) => theme.sizes.elems.icons};
  height: ${({ theme }) => theme.sizes.elems.icons};
  background-color: ${({ theme }) => theme.colors.iconbg};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  border: 0;
  line-height: 0px;
  color: ${({ isFavorite, theme }) => (isFavorite ? theme.colors.like : theme.colors.unactive)};
`

const IconBtn = ({ children, type = 'button', onClick, isFavorite, ...props }) => (
  <StyledIcon
    type={type}
    onClick={onClick}
    isFavorite={isFavorite}
    {...props}
  >
    { children }
  </StyledIcon>
)

export default IconBtn
