import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { MainContent } from './components/MainBoard';
import { GlobalStyle } from './global';
import Modal from 'react-modal'



export function App() {

  /*======= */
  /* MODAL */
  /*=======*/
  const [isModalFavorites, setIsModalFavorites] = useState(false);

  function handleOpenModalFavorites() {
    setIsModalFavorites(true)
  }

  function handleCloseModalFavorites() {
    setIsModalFavorites(false)
  }


  

  return (
    <>
      <Header onOpenFavoritesModal={handleOpenModalFavorites} />
      <MainContent />
      <Modal
        isOpen={isModalFavorites}
        onRequestClose={handleCloseModalFavorites}>
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}


