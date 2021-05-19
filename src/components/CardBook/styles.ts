import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`

`


export const Content = styled.div`
  margin-top: -10rem;


    input{
    width: 90%;
    padding: 0 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;
    background: #E7E9EE;

    font-weight: 400;
    font-size:1rem;

    &::placeholder{
      color: var(--text-body)
    }

    transition: filter 0.5s;

    &:hover{
      filter: brightness(0.9);
    }
  }


    button{
      font-size: 1rem;
			color: #FFF;
			background: var(--blue-light);
			border: 0;
			padding: 0 2rem;
			border-radius: 0.25rem;
			height: 2rem;

			transition: filter 0.4s;

			&:hover{
				filter: brightness(0.7);
			}
    }


`

export const ContentCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin-top: 4rem;

  .description{
    overflow: auto;
    height: 10rem
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    max-height: 500px;

    img {
      align-self: center;
      max-width: 290px;
      height: 15rem;
    }
    
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      margin-top: 1rem;
      height: 3rem;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }

      span {
        display: flex;
        align-items: center;
        align-content: center;
        margin: auto;
        font-weight: bold;
      }
    }

    .handle-click{
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      > button{
        margin-right: 0.3rem;
      }


    .iconbutton{
      height: 1rem
    }
    }

  }
`;