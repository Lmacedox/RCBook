import { Container,ContentCard, ContentModal } from "./styles";
import { BiStar } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Modal from 'react-modal'
import { useState } from "react";
import { toast } from "react-toastify";




interface DataInfo {
  id: string;
  volumeInfo: {
    title: string,
    description: string,
    publishedDate: string,
    imageLinks: {
      thumbnail: string;
    },
    language: string;
    authors: [];
  };

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
  const [favoritesBook, setfavoritesBook] = useState<DataInfo[]>([])

  function handleOpenModalDescription(idBook: string) {
    const currentBooks = [...books]
    const bookInfo = currentBooks.filter((book) => {
      return idBook == book.id
    })
    setinfoModalDescription([...bookInfo])
    console.log(infoModalDescription)
    sethandleModalDescription(true)
  }

  function handleCloseModalDescription() {
    sethandleModalDescription(false)
  }

// FUNCTION HANDLE MODAL FAVORITES
  async function handleOpenFavoritesModal(idBook:string) {
    try {
      const favoriteUpdate = [...books]
      const existBook = favoriteUpdate.find(book =>  book.id == idBook)
      localStorage.setItem('@Books:cart', JSON.stringify(existBook))
    } catch (error) {
      console.log(error)
    } 
      
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
                {/* FAVORITES BOOK */}
                <button
                  type="button"
                  onClick={()=> handleOpenFavoritesModal(book.id)}  
                >
                  <span> <BiStar className="iconbutton" />FAVORITOS</span>
                </button>
                {/* DETAILS BOOK */}
                <button
                  type="button"
                  onClick={() => handleOpenModalDescription(book.id)}
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
        {infoModalDescription.map(bookInfo => (
          <ContentModal>
            <div key={bookInfo.id} className="ContentInitial">
              <img src={bookInfo.volumeInfo.imageLinks.thumbnail} />
              <h3>
                Titulo: {bookInfo.volumeInfo.title}
              </h3>
              <p>
                <strong>Linguagem:</strong> {bookInfo.volumeInfo.language}
              </p>
              <p>
                <strong>Publicação: </strong> {bookInfo.volumeInfo.publishedDate}
              </p>
              <p>
                <strong>Autor: </strong> {bookInfo.volumeInfo.authors}
              </p>
            </div>

            <div className="LastContent">
              <div className="description">
                <p>
                  <strong>Descrição: </strong>
                  {bookInfo.volumeInfo.description}
                </p>
              </div>
            </div>
          </ContentModal>
        ))}
      </Modal>
    </Container>
  );
}