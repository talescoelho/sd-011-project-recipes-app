import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fcdc4d;
`;

export const Underline = styled.p`
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
  font-family: 'Libre Baskerville', Helvetica, Arial, sans-serif;
`;

export const HeaderNavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.color ? props.color : '#fcdc4d')};
`;

export const FooterBar = styled.footer`
  background-color: ${(props) => (props.color ? props.color : '#fcdc4d')};
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;
  padding: 8px;
  bottom: 0;
  position: fixed;
  width: 100%;
`;

export const CarouselItem = styled.div`
  width: 55vw;
  img {
    width: 45vw;
  }
`;
