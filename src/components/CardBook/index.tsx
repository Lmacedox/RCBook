import { Container,ContentCard, Content } from "./styles";
import Modal from 'react-modal'
import { api } from '../../services/api'
import { useState, useEffect } from 'react';
import { BiStar } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa';


interface CardBooksProps {
  onOpenDescriptionModal: () => void;
}


interface DataInfo  {
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





export function CardBook({ onOpenDescriptionModal }: CardBooksProps) {
  const [searchName, setSearchName] = useState('')
  const [books, setBooks] = useState<DataInfo[]>([]);
  const [paginationIndex, setPaginationIndex] = useState(0)

// FUNCTION SEARCH BOOK
  async function handleSearchBook(searchName:string) {
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

// FUNCTION HANDLE MODAL
  function modalDetails(idBook:string) {
    const currentBooks = [...books]
    const bookInfo = currentBooks.filter((book) =>{
      return idBook == book.id
    })
    console.log(bookInfo)
  }


  return (
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
                  onClick={onOpenDescriptionModal}
                >
                  <span> <AiOutlineInfoCircle className="iconbutton" />  DETALHES </span>
                </button>
              </div>
            </li>
          </ul>
        ))}
      </ContentCard>
    </Container>
  );
}