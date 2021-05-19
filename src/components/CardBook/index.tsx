import { Container,ContentCard } from "./styles";
import { BiStar } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai'




interface DataInfo {
  id: string;
  volumeInfo: {
    title: string,
    description: string,
    publishedDate: string,
    imageLinks: {
      thumbnail?: string;
    },
  }
}

interface CardBooksProps {
  books: DataInfo[]
  onOpenDescriptionModal: () => void;
}



export function CardBook({ onOpenDescriptionModal, books }: CardBooksProps) {
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