import { useState, useEffect } from 'react/cjs/react.development'
import styled from 'styled-components'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Modal from '../Modal'

const StyledTitle = styled.h3`
  margin: 0px 0px 0px 0px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.sizes.fonts.primary};
  line-height: 30px;
  background: #FFFFFF;
  border: 1px solid #B1B1B1;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 15px 0px 0px 0px;
  padding: 5px 0px 5px 25px;
`

const StyledPrimaryBtn = styled(PrimaryBtn)`
  margin: 15px auto 20px auto;
`

const CreateModal = ({ isShow, onClose, addBook }) => {
  const [addedBookName, setAddedBookName] = useState('')
  const [addedAuthorName, setAddedAuthorName] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [authorDirty, setAuthorDirty] = useState(false)
  const [errorName, setErrorName] = useState('Заполните поле')
  const [errorAuthor, setErrorAuthor] = useState('Заполните поле')
  const [formValid, setFormValid] = useState(false)

  const handleAddName = (e) => {
    setAddedBookName(e.target.value)
    if (e.target.value === '') {
      setErrorName('Заполните поле')
    } else setErrorName('')
  }
  const handleAddAuthor = (e) => {
    setAddedAuthorName(e.target.value)
    if (e.target.value === '') {
      setErrorAuthor('Заполните поле')
    } else setErrorAuthor('')
  }
  const handleClick = () => {
    addBook({ addedBookName, addedAuthorName })
  }
  const blurHandler = (e) => {
    if (e.target.name === 'name') setNameDirty(true)
    else if (e.target.name === 'author') setAuthorDirty(true)
  }

  useEffect(() => {
    if (errorName || errorAuthor) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [errorName, errorAuthor])

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <StyledTitle>Добавить книгу</StyledTitle>
      <StyledForm action="#">
        <StyledInput
          type="text"
          name="name"
          placeholder="Название"
          value={addedBookName}
          onChange={handleAddName}
          onBlur={blurHandler}
          style={{ borderColor: (nameDirty && errorName) && 'red' }}
        />
        {(nameDirty && errorName) && <div style={{ color: 'red' }}>{errorName}</div>}
        <StyledInput
          type="text"
          name="author"
          placeholder="Автор"
          value={addedAuthorName}
          onChange={handleAddAuthor}
          onBlur={blurHandler}
          style={{ borderColor: (authorDirty && errorAuthor) && 'red' }}
        />
        {(authorDirty && errorAuthor) && <div style={{ color: 'red' }}>{errorAuthor}</div>}
        <StyledPrimaryBtn onClick={handleClick} disabled={!formValid} type="submit">Сохранить</StyledPrimaryBtn>
      </StyledForm>
    </Modal>
  )
}

export default CreateModal
