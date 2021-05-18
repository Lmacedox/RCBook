import styled from 'styled-components';
import { Header } from './components/Header';
import { SearchBook } from './components/SearchBook';
import { GlobalStyle } from './global';



export function App() {
  return (
    <>
      <Header />
      <SearchBook />
      <GlobalStyle />
    </>
  );
}


