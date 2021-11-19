import styled from 'styled-components'

const StyledIcon = styled.button`
  width: ${({ theme }) => theme.sizes.elems.icons};
  height: ${({ theme }) => theme.sizes.elems.icons};
  background-color: ${({ theme }) => theme.colors.iconbg};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  border: 0;
`
const StyledIconInner = styled.div`
  position: absolute;
  top: 11px;
  left: 10px;
  color: ${({ theme }) => theme.colors.unactive};
`

const IconItem = ({ children, className, type, onClick, style }) => (
  <StyledIcon className={className} type={type} onClick={onClick}>
    <StyledIconInner style={style}>
      { children }
    </StyledIconInner>
  </StyledIcon>
)

export default IconItem
