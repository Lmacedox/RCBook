import styled from 'styled-components'



export const Container = styled.header `
    background: var(--blue);
`

export const Content = styled.div`
    font-size: 3rem;
    max-width:1120px;
    margin: 0 auto;

    padding: 1rem 1rem 10rem;
    display: flex;
    /* ALINHAMENTO DOS ITENS */
    align-items: center;
    /* ESPAÇO ENTRE ITENS */
    justify-content: space-between;



    button{
      font-size: 1rem;
			color: #FFF;
			background: var(--blue-light);
			border: 0;
			padding: 0 2rem;
			border-radius: 0.25rem;
			height: 3rem;

			transition: filter 0.4s;

			&:hover{
				filter: brightness(0.7);
			}
    }
`


