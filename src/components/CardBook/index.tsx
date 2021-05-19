import { Container,ContentCard } from "./styles";
import { BiStar } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Modal from 'react-modal'
import { useState } from "react";




interface DataInfo {
  id: string;
  volumeInfo: {
    title: string,
    description: string,
    publishedDate: string,
    imageLinks: {
      thumbnail: string;
    },
  }
}

interface CardBooksProps {
  books: DataInfo[]
}



export function CardBook({ books }: CardBooksProps) {

  /*======= */
  /* MODAL DESCRIPTION */
  /*=======*/
  const [handleModalDescription, sethandleModalDescription] = useState(false)
  const [infoModalDescription, setinfoModalDescription] = useState<DataInfo[]>([])

  function handleOpenModalDescription() {
    sethandleModalDescription(true)
  }

  function handleCloseModalDescription() {
    sethandleModalDescription(false)
  }

// FUNCTION HANDLE MODAL DESCRIPTION
  function modalDetails(idBook:string) {
    const currentBooks = [...books]
    const bookInfo = currentBooks.filter((book) =>{
      return idBook == book.id
    })
    // setinfoModalDescription(bookInfo)
    // console.log(infoModalDescription)      
  }
  console.log(books)

  return (
    <Container>
      <ContentCard>
        {books.map(book => (
          <ul>
            <li key={book.id}>
              <img src={book.volumeInfo.imageLinks.thumbnail} />
              <strong>
                Titulo: {book.volumeInfo.title}
              </strong>
              <p>
                <strong>Publicação: </strong>
                {book.volumeInfo.publishedDate}</p>
              <div className="description">
                <p>
                  <strong>Descrição: </strong>
                  {book.volumeInfo.description}
                </p>
              </div>
              <div className="handle-click">
                <button
                  type="button"
                  onClick={()=> modalDetails(book.id)}
                >
                  <span> <BiStar className="iconbutton" />FAVORITOS</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenModalDescription}
                >
                  <span> <AiOutlineInfoCircle className="iconbutton" />  DETALHES </span>
                </button>
              </div>
            </li>
          </ul>
        ))}
      </ContentCard>
      {/* MODAL */}
      <Modal
        isOpen={handleModalDescription}
        onRequestClose={handleCloseModalDescription}>
        {infoModalDescription.map(book => (
          <ul>
            <li key={book.id}>
              <strong>
                Titulo: {book.volumeInfo.title}
              </strong>
              <strong>Publicação: </strong>
              <p>{book.volumeInfo.publishedDate}</p>
              <div className="description">
                <p>
                  <strong>Descrição: </strong>
                  {book.volumeInfo.description}
                </p>
              </div>
            </li>
          </ul>
        ))}
      </Modal>
    </Container>
  );
}