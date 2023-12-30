import { styled } from 'styled-components';

const StyledConteiner = styled.div`
  margin: auto;
  margin-top: 24px;
  width: 1400px;
  background-color: ${p => p.theme.colors.lightest};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
`;

export const Container = ({ children }) => {
  return <StyledConteiner>{children}</StyledConteiner>;
};
