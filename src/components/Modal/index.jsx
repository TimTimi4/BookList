import styled from 'styled-components'

const Wrapper = styled.div`
`

const Inner = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.modalwindow};
  background: #FFFFFF;
  border-radius: 10px;
  padding: 55px;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%);
  z-index: 20;
  transition: all 0.6s;
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
`
const CloseModalArea = styled.div`
  background-color: #000;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 10;
  transition: all 0.6s;
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  opacity: ${({ isShow }) => (isShow ? '0.6' : '0')};
`

const Modal = ({ isShow, onClose, children }) => (
  <Wrapper>
    <CloseModalArea isShow={isShow} onClick={onClose} />
    <Inner isShow={isShow}>
      {children}
    </Inner>
  </Wrapper>
)

export default Modal
