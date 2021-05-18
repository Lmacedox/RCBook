import { BiBookBookmark } from 'react-icons/bi';
import { Container, Content } from './styles'

export function Header(){
  return(
    <Container>
      <Content>
        <span>
          RCBook
          <BiBookBookmark />
        </span>
        <button type="button">
          Favoritos
        </button>
      </Content>
    </Container>
  )
}