import { Container } from "./styles";
import { api } from '../../services/api'
import { useState, useEffect } from 'react';
import { BiStar } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface Book {
  id: number; 
}

interface DataInfo extends Book{
  volumeInfo: {
    title: string,
    description: string,
    publishedDate: string,
    imageLinks: {
      thumbnail:string;
    },
  }
}
export function CardBook() {
  const [books, setBooks] = useState<DataInfo[]>([]);

  useEffect(() => {
    async function loadBooks() {
      await api.get(`${'JavaScript'}&maxResults=5&key=AIzaSyCl-sNnxcXCUfx8EsqfQEfB9w6kVYqE0ps`)
        .then(response => 
          setBooks(response.data.items)
          )
    }
    loadBooks();
  }, []);


  return (
    <Container>
      {books.map(book => (
        <ul>
          <li key={book.id}>
            <img src={book.volumeInfo.imageLinks.thumbnail}/>
            <h3>
              Titulo:
            </h3>
            <p>{book.volumeInfo.title}</p>
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
                // onClick={() => handle(books.id)}
              >
                <span> <BiStar className="iconbutton"/>FAVORITOS</span>
              </button>
              <button
                type="button"
                // onClick={() => handle(books.id)}
              >
                <span> <AiOutlineInfoCircle className="iconbutton"/>  DETALHES </span>
              </button>
            </div>
          </li>
        </ul>
        ))}
    </Container>
  );
}