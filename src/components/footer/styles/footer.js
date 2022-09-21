import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  /* background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(183, 163, 231, 0.8) 100%); */
  @media (max-width: 1000px) {
    padding: 20px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin-left: 50%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #c13939;
    transition: 100ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;