import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Theme from './styles/theme'
import Container from './components/Container'
import BookRow from './components/BookRow'
import PrimaryBtn from './components/Buttons/PrimaryBtn'
import CreateModal from './components/CreateModal'
import EditModal from './components/EditModal'
import { createBook, getBooks } from './services/api'

const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.fonts.mainTitle};
  font-weight: 400;
  text-align: center;
`

const StyledPrimaryBtn = styled(PrimaryBtn)`
  margin: 60px auto 0px auto;
`

const App = () => {
  const [isShowCreateModal, setShowCreateModal] = useState(false)
  const [isShowEditModal, setShowEditModal] = useState(false)
  const [bookName, setBookName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [bookId, setBookId] = useState('')
  const [isLike, setLike] = useState('')
  const [books, setBooks] = useState([])
  const [hiddenBooks, setHiddenBooks] = useState([])

  const hideBookItem = (id) => {
    setHiddenBooks((prev) => [...prev, id])
  }

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data)
      })
  }, [])

  const addBook = ({ addedBookName, addedAuthorName }) => {
    const book = {}
    book.name = addedBookName
    book.author = addedAuthorName
    books.push(book)
    createBook(book)
      .then(() => {
        setBooks(books)
        setShowCreateModal(false)
      })
  }
  const handleEdit = ({ name, author, isFavorite, id }) => {
    setBookName(name)
    setAuthorName(author)
    setLike(isFavorite)
    setBookId(id)
    setShowEditModal(true)
  }

  console.log(books)

  return (
    <Theme>
      <Container>
        <MainTitle>Список книг</MainTitle>
        <BookRow
          list={books}
          onEdit={handleEdit}
          hiddenBooks={hiddenBooks}
          hideBookItem={hideBookItem}
        />
        <StyledPrimaryBtn
          onClick={() => setShowCreateModal(true)}
          type="button"
        >
          Добавить книгу
        </StyledPrimaryBtn>
        <CreateModal
          isShow={isShowCreateModal}
          onClose={() => setShowCreateModal(false)}
          addBook={addBook}
        />
        <EditModal
          isShow={isShowEditModal}
          onClose={() => setShowEditModal(false)}
          name={bookName}
          id={bookId}
          author={authorName}
          isFavorite={isLike}
          hideBookItem={hideBookItem}
          setBooks={setBooks}
        />
      </Container>
    </Theme>
  )
}

export default App
