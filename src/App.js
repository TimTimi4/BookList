import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Theme from './styles/theme'
import Container from './components/Container'
import BookRow from './components/BookRow'
import AddBookBtn from './components/Buttons/AddBookBtn'

const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.fonts.mainTitle};
  font-weight: 400;
  text-align: center;
`

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
        <MainTitle>Список книг</MainTitle>
        <BookRow list={books} />
        <AddBookBtn type="button">Добавить книгу</AddBookBtn>
      </Container>
    </Theme>
  )
}

export default App
