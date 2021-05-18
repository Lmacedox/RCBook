import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.ul`
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
