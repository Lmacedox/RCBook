import { Container, Content } from "./styles";
import { CardBook } from "../CardBook";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FaSearch } from 'react-icons/fa';

export function MainContent(){
  const [books, setBooks] = useState<DataInfo[]>([]);
  const [searchName, setSearchName] = useState('')
  const [paging, setPaging] = useState('1')
  const [maxResults, setmaxResults] = useState('10')


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
    }
  }

  // FUNCTION SEARCH BOOK
  async function handleSearchBook(searchName: string) {
    await api.get(`${searchName}&maxResults=${maxResults}&startIndex=${paging}&key=AIzaSyCl-sNnxcXCUfx8EsqfQEfB9w6kVYqE0ps`)
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




    return(
  <Container>
    <Content>
        <input className="search-inp"
          placeholder="DIGITE O TITULO DESEJADO"
          value={searchName}
          onChange={event => setSearchName(event.target.value)}
        />

          <button className="search-button"
          onClick={() => handleSearchBook(searchName)}
        >
          <FaSearch className="iconContent" />
        </button>
        <div className="paramsSearch">
        <label className="index-pag">Pagina:
          <input className="inp-param"
            value={paging}
            type="number"
              onChange={event => setPaging(event.target.value)}
          />
        </label>

          <label className="index-pag">Maximo de Resultados:
          <input className="inp-param"
            value={maxResults}
            type="number"
            onChange={event => setmaxResults(event.target.value)}
          />
          </label>
        </div>
        </Content>
        <CardBook books={books} />
        
  </Container>
  )
}

