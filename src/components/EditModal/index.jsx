import styled from 'styled-components'
import { useState } from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Modal from '../Modal'
import IconBtn from '../Buttons/IconBtn'
import Like from '../Icons/Like'
import DeleteBtn from '../Buttons/DeleteBtn'

const StyledTitle = styled.h3`
  margin: 0px 0px 0px 0px;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 35px 0px 0px 0px;
`
const StyledInput = styled.input`
font-size: ${({ theme }) => theme.sizes.fonts.primary};
line-height: 30px;
background: #FFFFFF;
border: 1px solid #B1B1B1;
box-sizing: border-box;
border-radius: 12px;
margin: 15px 0px 0px 0px;
padding: 5px 0px 5px 15px;
  &:first-child{
    margin: 0px 0px 0px 0px;
  }
`

const StyledPrimaryBtn = styled(PrimaryBtn)`
  margin: 15px auto 0px auto;
`

const StyledDeleteBtn = styled(DeleteBtn)`
  margin: 15px auto 0px auto;
`

const EditModal = ({ isShow, onClose, isFavorite, name, author }) => {
  const [bookName, setBookName] = useState(name)
  const [authorName, setAuthorName] = useState(author)
  const [isLike, setLike] = useState(isFavorite)

  const handleClick = () => {
    setLike(!setLike)
  }

  const handleChangeName = (e) => {
    setBookName(e.target.value)
  }

  const handleChangeAuthor = (e) => {
    setAuthorName(e.target.value)
  }

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <StyledHeader>
        <StyledTitle>Редактировать книгу</StyledTitle>
        <IconBtn isFavorite={isLike} onClick={handleClick}>
          <Like />
        </IconBtn>
      </StyledHeader>
      <StyledForm action="#">
        <StyledInput type="text" name="name" placeholder="Название" value={bookName} onChange={handleChangeName} />
        <StyledInput type="text" name="author" placeholder="Автор" value={authorName} onChange={handleChangeAuthor} />
        <StyledDeleteBtn>Удалить</StyledDeleteBtn>
        <StyledPrimaryBtn>Сохранить изменения</StyledPrimaryBtn>
      </StyledForm>
    </Modal>
  )
}

export default EditModal
