import { useState, useEffect } from 'react'
import Theme from './styles/theme'
import Container from './components/Container'
import MainTitle from './components/MainTitle'
import BookItem from './components/BookItem'
import BookRow from './components/BookRow'
import Button from './components/Button'

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
        <BookRow>
          {
        books.map((book) => (
          <BookItem key={book.id} name={book.name} author={book.author} />
        ))
        }
        </BookRow>
        <Button type="button">Добавить книгу</Button>
      </Container>
    </Theme>
  )
}

export default App
