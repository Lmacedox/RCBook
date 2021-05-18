import styled from 'styled-components';
import { Header } from './components/Header';
import { MainContent } from './components/MainBoard';
import { GlobalStyle } from './global';



export function App() {
  return (
    <>
      <Header />
      <MainContent />
      <GlobalStyle />
    </>
  );
}


