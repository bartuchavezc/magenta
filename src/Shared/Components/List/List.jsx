import styled from "styled-components";

const List = styled.ul`
    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};
    list-style: none;
`;

export default List;