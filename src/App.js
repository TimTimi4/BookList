import { useState, useEffect } from 'react'
import Theme from './styles/theme'
import Container from './components/Container'
import MainTitle from './components/MainTitle'
import BookRow from './components/BookRow'
import AddBookBtn from './components/Buttons/AddBookBtn'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:1717/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
      })
  }, [])

  return (
    <Theme>
      <Container>
        <MainTitle>Book List</MainTitle>
        <BookRow list={books} />
        <AddBookBtn type="button">Добавить книгу</AddBookBtn>
      </Container>
    </Theme>
  )
}

export default App
