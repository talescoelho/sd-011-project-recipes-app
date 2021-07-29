import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 2px solid black;
  input {
    position: absolute;
    margin-left: 7rem;
    height: 30px;
    border-radius: 6px;
  }
  .hide {
    display: none;
  }
`;