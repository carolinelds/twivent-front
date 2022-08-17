import styled from "styled-components";

export default function Loading() {
  return (
    <Div>
      <span className="loadingTitle">Carregando...</span>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .loadingTitle {
    font-size: 100%;
    font-weight: bold;
  }
`;
