import styled from 'styled-components'
import IconItem from '../IconItem'
import Like from '../Icons/Like'
import Trash from '../Icons/Trash'

const Wrapper = styled.div`
  min-width: ${({ theme }) => theme.sizes.blocks.item};
  margin: 0px 0px 29px 0px;
  &:last-child{
    margin: 0px 0px 0px 0px;
  }
  background: #FFFFFF;
  border-radius: 10px;
  position: relative;
  min-height: 180px;
`
const StyledBookName = styled.div`
  font-weight: 700;
  max-width: 290px;
  padding: 28px 0px 0px 0px;
  margin: 0px 0px 0px 32px;
  font-size: ${({ theme }) => theme.sizes.fonts.bookName};
`

const StyledAuthor = styled.div`
  margin: 14px 0px 0px 32px;
  font-size: ${({ theme }) => theme.sizes.fonts.author};

`

const StyledLikeIcon = styled(IconItem)`
  position: absolute;
  right: 31px;
  top: 28px;
`

const StyledTrashIcon = styled(IconItem)`
  position: absolute;
  right: 31px;
  bottom: 31px;
`

const BookItem = ({ id, name, author, isFavorite }) => {
  const [isLike, setLike] = useState(isFavorite)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  return (
    <Wrapper>
      <StyledBookName>
        {name}
      </StyledBookName>
      <StyledAuthor>
        {author}
      </StyledAuthor>
      <StyledLikeIcon type="button" isFavorite={isFavorite} onClick={handleClick}>
        <Like />
      </StyledLikeIcon>
      <StyledTrashIcon type="button">
        <Trash />
      </StyledTrashIcon>
    </Wrapper>
  )
}

export default BookItem
