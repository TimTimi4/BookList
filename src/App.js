import Theme from './styles/theme'
import Container from './components/Container'
import MainTitle from './components/MainTitle'
import BookItem from './components/BookItem'

const App = () => (
  <Theme>
    <Container>
      <MainTitle>Book List</MainTitle>
      <BookItem />
    </Container>
  </Theme>
)

export default App
