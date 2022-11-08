import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    // const [valorDaBusca, setValorDaBusca] = React.useState(""); // useState: função para para mudar o seu estado, reesecutar e mudar algo na pagina 

    return(
        <StyledSearch>
            <input type="text" value={valorDoFiltro} onChange={(event) => {
                setValorDoFiltro(event.target.value); // pegando o valor do evento e passando para a função setState
            }}/>
            <button>
                🔎
            </button>
        </StyledSearch>
    );
};