import { Container, Content } from "./styles";
import { CardBook } from "../CardBook";
import { useEffect, useState } from "react";
import Modal from 'react-modal'
import { api } from "../../services/api";
import { FaSearch } from 'react-icons/fa';

export function MainContent(){
  const [books, setBooks] = useState<DataInfo[]>([]);
  const [searchName, setSearchName] = useState('')

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

  // FUNCTION SEARCH BOOK
  async function handleSearchBook(searchName: string) {
    await api.get(`${searchName}&maxResults=9&startIndex=1&key=AIzaSyCl-sNnxcXCUfx8EsqfQEfB9w6kVYqE0ps`)
      .then(response =>
        setBooks(response.data.items)
      )
  }

  // FUNCTION INITIAL SEARCH
  useEffect(() => {
    async function loadBooks() {
      await api.get(`${'JavaScript'}&maxResults=9&startIndex=0&key=AIzaSyCl-sNnxcXCUfx8EsqfQEfB9w6kVYqE0ps`)
        .then(response =>
          setBooks(response.data.items)
        )
    }
    loadBooks();
  }, []);

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
    <Content>
        <input
          placeholder="DIGITE O TITULO DESEJADO"
          value={searchName}
          onChange={event => setSearchName(event.target.value)}
        />

        <button
          onClick={() => handleSearchBook(searchName)}
        >
          <FaSearch className="iconContent" />
        </button>
        </Content>
        <CardBook onOpenDescriptionModal={handleOpenModalDescription} books={books} />
        <Modal
          isOpen={handleModalDescription}
          onRequestClose={handleCloseModalDescription}>
          {books.map(book => (
          <ul>
            <li>
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
  )
}

