import styled from "styled-components";

export const Options = styled.div`
  width: 95%;
  gap: 25px;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 768px) {
    width: 150%;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const Option = styled.div`
  background-color: white;
  padding: 25px;
  max-width: 220px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.background};
    transform: scale(1.2);
  }
  h3 { 
    padding: 10px 0px;
   }

   div .option p {
    font-size: 0.9em;
  }

  svg {
  color: #2388ce;
  font-size: 1.5em;
} 

  @media (max-width: 768px) {
    margin: 0px 10px;
    max-width: 100%;
    align-items: center;
    justify-content: center;

    h3 {
        padding: 10px 0px;
    }

    p {
      font-size: 0.9em;
    }
  }
`
