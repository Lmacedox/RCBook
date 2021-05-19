import { useState } from 'react';
import { BiBookBookmark } from 'react-icons/bi';
import { Container, Content } from './styles'

interface HeaderProps{
  onOpenFavoritesModal: () => void;
}


export function Header({onOpenFavoritesModal}: HeaderProps){

  return(
    <Container>
      <Content>
        <span>
          RCBook
          <BiBookBookmark />
        </span>
        <button 
          type="button"
          onClick={onOpenFavoritesModal}
          >
          Favoritos
        </button>

      </Content>
    </Container>
  )
}