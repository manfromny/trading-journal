import styled from "styled-components";

export const TableHeadItem = styled.th`
  padding: 15px 10px;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    display: none;
  }

  :hover {
    cursor: pointer;
  }

  &.selected {
    border: 2px solid #724cf9;
    border-radius: 10px;
    color: #724ef9;
  }
`;
