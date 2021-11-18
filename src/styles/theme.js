import { ThemeProvider } from 'styled-components'
import GlobalStyle from './global'

const theme = {
  colors:
    {
      bg: '#E5E5E5',
      unactive: '#B1B1B1',
      like: '#EB434D',
      textPrimary: '#A4A4A4',
      textSecondary: '#676767',
    },
  sizes:
    {
      blocks:
        {
          item: '440px',
          avatar: '110px',
          container: '1000px',
        },
      elems:
        {
          icons: '40px',
        },
      fonts:
        {
          mainTitle: '44px',
          bookName: '20px',
          desc: '16px',
        },
    },
  fonts:
    {
      primary: "'Lato', sans-serif;",
      title: "'Andada Pro', sans-serif;",
    },
  media:
    {
      mobileS: '(max-width: 320px)',
      mobileM: '(max-width: 375px)',
      mobileL: '(max-width: 425px)',
      tablet: '(max-width: 768px)',
      laptop: '(max-width: 1024px)',
      laptopL: '(max-width: 1440px)',
      desktop: '(max-width: 2560px)',
    },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
