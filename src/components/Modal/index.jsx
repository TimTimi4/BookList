import styled from 'styled-components'

const Wrapper = styled.div`
  visibility: visible;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.modalwindow};
  background: #FFFFFF;
  border-radius: 10px;
  padding: 55px;
  position: relative;
  z-index: 20;

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
`

const Modal = ({ isShow, onClose, children }) => (
  <Wrapper isShow={isShow}>
    <CloseModalArea isShow={isShow} onClick={onClose} />
    <Container isShow={isShow}>
      {children}
    </Container>
  </Wrapper>
)

export default Modal
