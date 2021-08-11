import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fcdc4d;
`;

export const SubButton = styled.button`
  text-decoration: underline;
`;

export const Container = styled.div`
  height: 100vh;
  padding: 10px;
  background-color: #fcdc4d;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Libre Baskerville';
`;

export const HeaderNavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.color ? props.color : '#fcdc4d')}; 
`;
