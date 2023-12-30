import { styled } from 'styled-components';

const StyledConteiner = styled.div``;

export const Container = ({ children }) => {
  return <StyledConteiner>{children}</StyledConteiner>;
};
