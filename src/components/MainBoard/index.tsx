import { Container } from "./styles";
import { SearchData } from '../SearchBook'
import { CardBook } from "../CardBook";

export function MainContent(){
  return(
  <Container>
    <SearchData />
    <CardBook />
  </Container>
  )
}