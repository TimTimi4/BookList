// import styled from 'styled-components'
import Modal from '../Modal'

const CreateModal = ({ isShow, onClose }) => (
  <Modal isShow={isShow} onClose={onClose}>
    <h3>Добавить книгу</h3>
    <input name="name" />
    <input name="author" />
  </Modal>
)

export default CreateModal
