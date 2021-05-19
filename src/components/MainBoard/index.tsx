import { Container } from "./styles";
import { CardBook } from "../CardBook";
import { useState } from "react";
import Modal from 'react-modal'



export function MainContent(){
  /*======= */
  /* MODAL DESCRIPTION */
  /*=======*/
  const [handleModalDescription, sethandleModalDescription] = useState(false)

  function handleOpenModalDescription() {
    sethandleModalDescription(true)
  }

  function handleCloseModalDescription() {
    sethandleModalDescription(false)
  }

    return(
  <Container>
        <CardBook onOpenDescriptionModal={handleOpenModalDescription} />
        <Modal
          isOpen={handleModalDescription}
          onRequestClose={handleCloseModalDescription}>
          <h2>Cadastrar Transação</h2>
        </Modal>
  </Container>
  )
}