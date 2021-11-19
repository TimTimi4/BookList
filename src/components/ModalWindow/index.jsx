import styled from 'styled-components'

const Wrapper = styled.div`
  min-width: ${({ theme }) => theme.sizes.blocks.modalwindow};
  height: 400px;
  background: #FFFFFF;
  border-radius: 10px;
`
const CloseModalArea = styled.div`
  background-color: #000;
  position: fixed;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0.6;
  z-index: 14;
  @media ${({ theme }) => theme.media.tablet} {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`

const ModalWindow = () => (
  <div>
    <CloseModalArea />
    <Wrapper />
  </div>
)

export default ModalWindow
