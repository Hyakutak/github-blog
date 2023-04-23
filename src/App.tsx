import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { PostsContextProvider } from './contexts/PostsContext';

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <PostsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsContextProvider>
      <GlobalStyle />
    </ThemeProvider> 
  )
}
