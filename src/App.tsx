import { Header } from './components/Header';
import { MainContent } from './components/MainBoard';
import { GlobalStyle } from './global';
import Modal from 'react-modal'
import { useState } from 'react';



export function App() {

  /*======= */
  /* MODAL FAVORITES */
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


