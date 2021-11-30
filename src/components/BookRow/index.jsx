import styled from 'styled-components'
import BookItem from '../BookItem'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap;
`

const BookRow = ({ list, onEdit, hiddenBooks, hideBookItem }) => (
  <Wrapper>
    {
      list.map((item) => (
        <BookItem
          isHide={hiddenBooks.includes(item.id)}
          hideBookItem={hideBookItem}
          onEdit={onEdit}
          key={item.id}
          id={item.id}
          name={item.name}
          author={item.author}
          isFavorite={item.isFavorite}
        />
      ))
    }
  </Wrapper>
)

export default BookRow
