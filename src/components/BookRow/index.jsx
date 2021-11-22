import styled from 'styled-components'
import BookItem from '../BookItem'

const Wrapper = styled.div`
  width: 100%;
`

const BookRow = ({ list }) => (
  <Wrapper>
    {
      list.map((item) => (
        <BookItem
          key={item.id}
          name={item.name}
          author={item.author}
          isFavorite={item.isFavorite}
        />
      ))
    }
  </Wrapper>
)

export default BookRow
