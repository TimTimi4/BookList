import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import { deleteBook, editBook } from '../../services/api'
import IconBtn from '../Buttons/IconBtn'
import Like from '../Icons/Like'
import Trash from '../Icons/Trash'

const Wrapper = styled.div`
  min-width: ${({ theme }) => theme.sizes.blocks.item};
  margin: 0px 0px 29px 0px;
  cursor: pointer;
  background: #FFFFFF;
  border-radius: 10px;
  position: relative;
  min-height: 180px;
`
const BookName = styled.div`
  font-weight: 700;
  max-width: 290px;
  padding: 28px 0px 0px 0px;
  margin: 0px 0px 0px 32px;
  font-size: ${({ theme }) => theme.sizes.fonts.primary};
`
const StyledAuthor = styled.div`
  margin: 14px 0px 0px 32px;
  font-size: ${({ theme }) => theme.sizes.fonts.author};

`
const StyledLikeIcon = styled(IconBtn)`
  position: absolute;
  right: 31px;
  top: 28px;
`
const StyledTrashIcon = styled(IconBtn)`
  position: absolute;
  right: 31px;
  bottom: 31px;
`

const Error = styled.div`
  position: absolute;
  right: 31px;
  top: 65px;
  font-size: ${({ theme }) => theme.sizes.fonts.infoMessage};
`

const BookItem = ({ id, name, author, isFavorite, onEdit, isHide, hideBookItem }) => {
  const [isLike, setLike] = useState(isFavorite)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChangeFavorite = (e) => {
    e.stopPropagation()
    setLoading(true)
    editBook(id, { isFavorite: !isLike })
      .then(() => {
        setLike(!isLike)
        setError('')
      })
      .catch(() => {
        setError('unknown error')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleEdit = () => {
    onEdit({ name, author, isFavorite, id })
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    deleteBook(id).then(() => {
      hideBookItem(id)
    })
  }

  return (
    !isHide && (
    <Wrapper onClick={handleEdit}>
      <BookName>
        {name}
      </BookName>
      <StyledAuthor>
        {author}
      </StyledAuthor>
      <StyledLikeIcon isFavorite={isLike} onClick={handleChangeFavorite} disabled={loading}>
        {loading ? '?' : <Like />}
      </StyledLikeIcon>
      <Error>{error}</Error>
      <StyledTrashIcon onClick={handleDelete}>
        <Trash />
      </StyledTrashIcon>
    </Wrapper>
    )
  )
}
export default BookItem
